import Student from "./components/Student";
import Navigation from "./components/Navigation";
import Button from "../../../Login/components/Button";

const Menu = () => {
  const navList = ["Perfil", "Estudio", "Evaluaciones", "Stream", "ajustes"];
  const userInfo = {
    name: "student name",
    imgUser: "user.jpeg",
    level: 0,
  };

  const handleBtn = () => {
    console.log("se ha desconectado");
  };

  return (
    <div className="flex flex-col h-full w-80 justify-around items-center bg-[#F2D3AB]">
      <div>
        <h1>Classroom Demo</h1>
      </div>
      <Student
        name={userInfo.name}
        imgUser={userInfo.imgUser}
        level={userInfo.level}
      />
      <Navigation list={navList} />
      <Button name="Log Out" type="submit" onClick={handleBtn} />
    </div>
  );
};

export default Menu;
