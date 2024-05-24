interface CardProps {
  title: string;
  levelName: string;
  totalCaps: number;
  percComplete: number;
  className: string;
}

const Card = (props: CardProps) => {
  return (
    <div
      className={`${props.className} rounded-xl backdrop-blur-md border border-black/10 shadow-inner shadow-white/10 overflow-hidden `}
    >
      <div className="relaltive">
        <img
          src="/user.jpeg"
          alt="User Avatar"
          className="h-48 w-full object-cover overflow-hidden"
        />
      </div>
      <div className="text-center px-6 py-4">
        <h3 className="text-xl font-semibold">{props.title}</h3>
        <p className="text-sm font-medium">{props.levelName}</p>
        <div className="flex justify-center mt-4">
          <div>
            <p className="text-sm">Capitulos</p>
            <p className="text-lg font-semibold">{props.totalCaps}</p>
          </div>
          <div className="ml-6">
            <p className="text-sm">Completado</p>
            <p className="text-lg font-semibold">{props.percComplete}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
