import Acordion from "../../UI/Acordion";
import EvaluationItems from "./components/EvaluationItems";
import evaluationData from "../../../mock/evaluationData.json";

const Evaluations = () => {
  const acordionItems = evaluationData.map((item) => {
    const listChapters = item.subChapters.map((subChapter) => (
      <EvaluationItems
        key={subChapter.id}
        title={subChapter.title}
        status={subChapter.status}
      />
    ));

    return (
      <Acordion
        key={item.id}
        title={item.title}
        subTitle={item.subTitle}
        imgChapter={item.imgChapter}
        status={item.status}
      >
        {listChapters}
      </Acordion>
    );
  });

  return (
    <div className="relative w-full flex flex-col">
      <h1 className="text-left text-3xl p-6">Evaluaciones</h1>
      {acordionItems}
    </div>
  );
};

export default Evaluations;
