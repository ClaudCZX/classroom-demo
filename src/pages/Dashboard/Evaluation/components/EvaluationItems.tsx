interface EvaluationItem {
  key: number;
  title: string;
  status: string;
}

const EvaluationItems = (props: EvaluationItem) => {
  return (
    <div className="flex justify-between items-center">
      <div className="cursor-pointer hover:text-blue-200">{props.title}</div>
      <div>{props.status}</div>
    </div>
  );
};

export default EvaluationItems;
