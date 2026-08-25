import ContentComponent from './components/content';
import FooterComponent from './components/footer';
import HeaderComponent from './components/header';
export default function App() {
  return (
    <div>
      <HeaderComponent />
      <main>
       <ContentComponent />
      </main>
      <FooterComponent />
    </div>
  );
}
