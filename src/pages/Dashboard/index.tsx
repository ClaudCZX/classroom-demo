import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Menu from "./Menu";
import Perfil from "./components/BodyItem/Perfil";
import Study from "./Study";
import Evaluations from "./Evaluation";
import Stream from "./Stream";
import Settings from "./Preferences";

const Dashboard = () => {
  return (
    <div className="flex h-screen w-full">
      <Menu />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/study" element={<Study />} />
        <Route path="/evaluations" element={<Evaluations />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
