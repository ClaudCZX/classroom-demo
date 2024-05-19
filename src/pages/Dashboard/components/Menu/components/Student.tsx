interface StudentProps {
  name: string;
  imgUser: string;
  level: number;
}

const Student = (props: StudentProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-36 h-36 border rounded-full overflow-hidden">
        <img className="object-cover" src={props.imgUser} />
      </div>
      <h2>{props.name}</h2>
      <p className="text-[#494d7e]">Nivel {props.level}</p>
    </div>
  );
};

export default Student;
