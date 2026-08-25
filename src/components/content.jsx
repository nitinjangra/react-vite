import ListContent from "./ListContent";

const delhiList = ["B.Tech (ECE)", "B.Tech (Electrical)", "M.Tech (IT)", "PHD"];
const madrasList = [
  "BS in DS and Applications",
  "BS in Electronic Systems",
  "BS & MS Dual Degree in Biological Sciences & Physics",
];
const listContent = [
  { title: "IIT Delhi", list: delhiList },
  { title: "IIT Madras", list: madrasList },
];

const ContentComponent = () => {
  return (
    <div>
      <h2> Counselling college list available for you </h2>
      <ListContent data={listContent} />
    </div>
  );
};

export default ContentComponent;
