interface CardProps {
  className?: string;
}

const Card = () => {
  return (
    <div className=" overflow-hidden col-span-12 md:col-span-4 rounded-xl backdrop-blur-md border border-black/10 shadow-inner shadow-white/10">
      <div className="relaltive">
        <img
          src="/user.jpeg"
          alt="User Avatar"
          className="h-48 w-full object-cover overflow-hidden"
        />
      </div>
      <div className="text-center px-6 py-4">
        <h3 className="text-xl font-semibold">Capitulo 1</h3>
        <p className="text-sm font-medium">Camino a la madurez</p>
        <div className="flex justify-center mt-4">
          <div>
            <p className="text-sm">Capitulos</p>
            <p className="text-lg font-semibold">10</p>
          </div>
          <div className="ml-6">
            <p className="text-sm">Completado</p>
            <p className="text-lg font-semibold">20%</p>
          </div>
        </div>
      </div>
      <p aria-label="View source on GitHub" />
    </div>
  );
};

export default Card;
