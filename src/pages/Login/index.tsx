import Button from "./components/Button";
import InputText from "./components/InputText";
import { ChangeEvent, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value);
  };

  const handleBtn = () => {
    console.log("revisando", email, pass);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Classrom Demo"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Classroom Demo
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <InputText
              label="Correo"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
            <InputText
              label="Contraseña"
              name="password"
              value={pass}
              onChange={handlePassChange}
            />

            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-[#8B6D9C] hover:text-[#C69FA5]"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <Button name="Ingresar" type="submit" onClick={handleBtn} />
          </form>

          <p className="mt-10 text-center text-sm text-[#494D7E]">
            ¿No eres miembro?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-[#8B6D9C] hover:text-[#C69FA5]"
            >
              Contactanos
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
