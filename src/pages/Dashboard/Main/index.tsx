import Bento from "../../UI/Bento/Bento";
import BentoItem from "../../UI/Bento/BentoItem";

const Main = () => {
  return (
    <div className="h-full w-full">
      <h1>Dashboard</h1>
      <Bento className="grid-cols-10 md:grid-rows-[1fr,2fr,2fr] auto-rows-[20rem] overflow-scroll">
        <BentoItem className="col-span-10 md:col-span-2"></BentoItem>
        <BentoItem className="col-span-10 md:col-span-2"></BentoItem>
        <BentoItem className="col-span-10 md:col-span-2"></BentoItem>
        <BentoItem className="col-span-10 md:col-span-4"></BentoItem>
        <BentoItem className="col-span-10 md:col-span-6"></BentoItem>
        <BentoItem className="col-span-10 md:col-span-4"></BentoItem>
        <BentoItem className="col-span-10 md:col-span-6"></BentoItem>
        <BentoItem className="col-span-10 md:col-span-4"></BentoItem>
      </Bento>
    </div>
  );
};

export default Main;
