import { useState } from "react";
import { snapdom } from "@zumer/snapdom";
import { MdScreenshotMonitor } from "react-icons/md";
import "./App.css";
import ContentComponent from "./components/content";
import FooterComponent from "./components/footer";
import HeaderComponent from "./components/header";

export default function App() {
  const [captureStatus, setCaptureStatus] = useState("Screenshot");

  const handleScreenshot = async () => {
    setCaptureStatus("Capturing...");

    try {
      const blob = await snapdom.toBlob(document.documentElement, {
        clip: "viewport",
        exclude: ["[data-screenshot-control]"],
        type: "png",
      });

      if (!navigator.clipboard?.write || !window.ClipboardItem) {
        throw new Error("Clipboard access is unavailable");
      }

      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob }),
      ]);

      const downloadUrl = URL.createObjectURL(blob);
      const downloadLink = document.createElement("a");
      downloadLink.href = downloadUrl;
      downloadLink.download = "react-learning-screenshot.png";
      downloadLink.click();
      URL.revokeObjectURL(downloadUrl);
      setCaptureStatus("Copied");
    } catch {
      setCaptureStatus("Copy failed");
    }
  };

  return (
    <div className="app">
      <button
        aria-label="Copy screenshot of the current view"
        className="screenshot-button"
        data-screenshot-control
        onClick={handleScreenshot}
        type="button"
      >
        <MdScreenshotMonitor />
        <span>{captureStatus}</span>
      </button>
      <HeaderComponent />
      <main>
        <ContentComponent />
      </main>
      <FooterComponent />
    </div>
  );
}
