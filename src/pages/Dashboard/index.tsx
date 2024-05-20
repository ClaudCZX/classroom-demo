import { Route, Routes } from "react-router-dom";
import BodyItem from "./components/BodyItem";
import Menu from "./components/Menu";
import Perfil from "./components/BodyItem/Perfil";

const Dashboard = () => {
  return (
    <div className="flex h-screen w-full">
      <Menu />
      <Routes>
        <Route path="/main" element={<BodyItem />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/study" element={<h1>Contenidos</h1>} />
        <Route path="/evaluations" element={<h1>Evaluaciones</h1>} />
        <Route path="/stream" element={<h1>Stream</h1>} />
        <Route path="/settings" element={<h1>Ajustes</h1>} />
      </Routes>
    </div>
  );
};

export default Dashboard;
