import Bento from "../../UI/Bento/Bento";
import Card from "../../UI/Card";

const Study = () => {
  return (
    <div className="relative w-full flex flex-col">
      <h1 className="text-left text-3xl p-6">Estudios</h1>
      <Bento className="grid-cols-12 auto-rows-[20rem] overflow-scroll">
        <Card
          title="Camino a la madurez"
          levelName="Nivel inicial"
          totalCaps={10}
          percComplete={25.4}
          className="col-span-12 md:col-span-4"
        />
      </Bento>
    </div>
  );
};

export default Study;
