import { Link } from "react-router-dom";
import Student from "./components/Student";
import Navigation from "./components/Navigation";
import Button from "../../../Login/components/Button";
import NAVITEMS from "./navigationItems";

const Menu = () => {
  const userInfo = {
    name: "student name",
    imgUser: "/user.jpeg",
    level: 0,
  };

  const handleBtn = () => {
    console.log("se ha desconectado");
  };

  return (
    <div className="flex flex-col h-full w-80 justify-around items-center bg-[#F2D3AB]">
      <div>
        <Link to={"main"}>
          <h1>Classroom Demo</h1>
        </Link>
      </div>
      <Student
        name={userInfo.name}
        imgUser={userInfo.imgUser}
        level={userInfo.level}
      />
      <Navigation list={NAVITEMS} />
      <Button name="Log Out" type="submit" onClick={handleBtn} />
    </div>
  );
};

export default Menu;
