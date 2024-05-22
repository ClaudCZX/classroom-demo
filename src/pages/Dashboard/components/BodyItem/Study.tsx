import Card from "../../../UI/Card";

const Study = () => {
  return (
    <div className="relative h-screen w-full">
      <h1>Estudios</h1>
      <div className="w-full h-full grid overflow-scroll grid-cols-12 auto-rows-[20rem] md:overflow-scroll gap-4 mx-auto p-20">
        <Card
          title="Camino a la madurez"
          levelName="Nivel inicial"
          totalCaps={10}
          percComplete={25.4}
        />
      </div>
    </div>
  );
};

export default Study;
