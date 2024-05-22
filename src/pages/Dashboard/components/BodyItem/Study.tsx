import Card from "../../../UI/Card";

const Study = () => {
  return (
    <div className="relative h-screen w-full">
      <h1>Estudios</h1>
      <div className="w-full h-full grid overflow-scroll grid-cols-12 auto-rows-[20rem] md:overflow-scroll gap-4 mx-auto p-20">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Study;
