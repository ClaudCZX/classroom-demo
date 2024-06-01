import Acordion from "../../UI/Acordion";
import evaluationData from "../../../mock/evaluationData.json";

const Evaluations = () => {
  const list = "hola";
  const acordionItems = evaluationData.map((item) => (
    <Acordion
      key={item.id}
      title={item.title}
      subTitle={item.subTitle}
      imgChapter={item.imgChapter}
      status={item.status}
    >
      {list}
    </Acordion>
  ));
  return (
    <div className="relative w-full flex flex-col">
      <h1 className="text-left text-3xl p-6">Evaluaciones</h1>
      {acordionItems}
    </div>
  );
};

export default Evaluations;
