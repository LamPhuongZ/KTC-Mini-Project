import { useState } from "react";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import { NavLink } from "react-router-dom";

const AuthenticationPage = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);

  const toggleActive = () => {
    setIsLoginActive(!isLoginActive);
  };
  return (
    <section className=" bg-slate-800 min-h-screen w-4/5 flex justify-between relative items-center mx-auto p-10">
      <div className="flex justify-between w-full h-full">
        <SignUp toggleActive={toggleActive} />
        <SignIn toggleActive={toggleActive} />
      </div>

      <div
        className={`absolute top-0 left-0 h-full w-1/2 bg-slate-800 text-white flex items-center justify-center transition-all duration-700 ease-in-out ${
          isLoginActive ? "left-0" : "left-1/2"
        }`}
      >
        <NavLink className="text-center" to="/movies">
          <h2 className="capitalize font-extrabold text-7xl text-transparent bg-clip-text bg-primary-gradient">
            watch ..?
          </h2>
        </NavLink>
      </div>
    </section>
  );
};

export default AuthenticationPage;
