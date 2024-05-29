import Bento from "../../UI/Bento/Bento";
import BentoItem from "../../UI/Bento/BentoItem";

const Stream = () => {
  return (
    <div className="relative w-full">
      <h1>Stream</h1>
      <Bento className="grid-cols-10 md:grid-rows-[2fr,0.5fr] auto-rows-[20rem] overflow-scroll">
        <BentoItem className="col-span-10 md:col-span-7"></BentoItem>
        <BentoItem className="col-span-10 md:col-span-3"></BentoItem>
      </Bento>
    </div>
  );
};

export default Stream;
