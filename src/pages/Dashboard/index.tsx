import BodyItem from "./components/BodyItem";
import Menu from "./components/Menu";

const Dashboard = () => {
  return (
    <div className="flex h-screen w-full">
      <Menu />
      <BodyItem />
    </div>
  );
};

export default Dashboard;
