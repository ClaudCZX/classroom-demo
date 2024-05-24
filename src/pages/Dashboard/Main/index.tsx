import DashboardItem from "./components/DashboardItem";

const Main = () => {
  return (
    <div className="h-full w-full">
      <h1>Dashboard</h1>
      <div className="w-full h-full grid overflow-scroll grid-cols-10 grid-rows-[1fr,2fr,2fr] md:overflow-scroll gap-4 mx-auto p-20">
        <DashboardItem className="col-span-10 md:col-span-2" />
        <DashboardItem className="col-span-10 md:col-span-2" />
        <DashboardItem className="col-span-10 md:col-span-2" />
        <DashboardItem className="col-span-10 md:col-span-4" />
        <DashboardItem className="col-span-10 md:col-span-6" />
        <DashboardItem className="col-span-10 md:col-span-4" />
        <DashboardItem className="col-span-10 md:col-span-6" />
        <DashboardItem className="col-span-10 md:col-span-4" />
      </div>
    </div>
  );
};

export default Main;
