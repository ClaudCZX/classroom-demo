import AcordionItem from "./AcordionItem";
import mockData from "../../../mock/mockData.json";

const Acordion = () => {
  const items = "buenas";
  const acordionItems = mockData.map((chapter) => (
    <AcordionItem
      key={chapter.id}
      title={chapter.title}
      subTitle={chapter.subTitle}
      imgChapter={chapter.imgChapter}
      status={chapter.status}
    >
      {items}
    </AcordionItem>
  ));
  return <>{acordionItems}</>;
};

export default Acordion;
