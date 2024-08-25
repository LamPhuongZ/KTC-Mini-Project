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
    <div className="min-h-screen p-5 ">
      <div className=" bg-slate-800 w-4/5 flex justify-between relative items-center my-[75px] mx-auto p-10 md:p-5 sm:p-2">
        <div className="flex justify-between w-full h-full">
          <SignUp toggleActive={toggleActive} />
          <SignIn toggleActive={toggleActive} />
        </div>

        <div
          className={`absolute top-0 left-0 h-full w-1/2 bg-slate-800 text-white flex items-center justify-center transition-all duration-700 ease-in-out ${
            isLoginActive ? "left-0" : "left-1/2"
          }`}
        >
          <NavLink
            className="text-center capitalize font-extrabold text-7xl text-transparent bg-clip-text bg-primary-gradient cursor-pointer md:text-5xl sm:text-4xl"
            to="/movies"
          >
            watch ..?
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
