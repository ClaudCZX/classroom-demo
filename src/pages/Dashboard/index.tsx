import { Route, Routes } from "react-router-dom";
import Main from "./components/BodyItem/Main";
import Menu from "./components/Menu";
import Perfil from "./components/BodyItem/Perfil";
import Study from "./components/BodyItem/Study";
import Evaluations from "./components/BodyItem/Evaluations";
import Stream from "./components/BodyItem/Stream";
import Settings from "./components/BodyItem/Settings";

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
