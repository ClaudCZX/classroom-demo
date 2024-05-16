import Button from "../Login/components/Button";
import Navigation from "./components/Navigation";
import Student from "./components/Student";

const Dashboard = () => {
  const navList = ["Perfil", "Estudio", "Evaluaciones", "Stream", "ajustes"];
  const handleBtn = () => {
    console.log("se ha desconectado");
  };
  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-col h-full w-80 justify-around items-center bg-red-400">
        <div>
          <h1>Classroom Demo</h1>
        </div>
        <Student name="student name" level={0} />
        <Navigation list={navList} />
        <div>Log out</div>
        <Button name="Log Out" type="submit" onClick={handleBtn} />
      </div>

      <div className="h-full w-full bg-slate-600">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
