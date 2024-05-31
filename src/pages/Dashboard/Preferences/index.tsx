import Bento from "../../UI/Bento/Bento";
import BentoItem from "../../UI/Bento/BentoItem";

const Settings = () => {
  return (
    <div className="relative w-full flex flex-col">
      <h1 className="text-left text-3xl p-6">Ajustes</h1>
      <Bento className="grid-cols-1 md:grid-rows-[3fr,1fr]">
        <BentoItem></BentoItem>
        <BentoItem></BentoItem>
      </Bento>
    </div>
  );
};

export default Settings;
