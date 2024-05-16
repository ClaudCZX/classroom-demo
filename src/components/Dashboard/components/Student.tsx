interface StudentProps {
  name: string;
  level: number;
}

const Student = (props: StudentProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 bg-slate-400 rounded-full"></div>
      <h1>{props.name}</h1>
      <p>Nivel {props.level}</p>
    </div>
  );
};

export default Student;
