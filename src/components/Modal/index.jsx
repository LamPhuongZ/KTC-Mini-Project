// import { useState } from "react";
import { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";

export function Modal() {
  const [isLoginActive, setIsLoginActive] = useState(true);

  const toggleActive = () => {
    setIsLoginActive(!isLoginActive);
  };

  return (
    <section className="w-8/12 h-5/6 bg-slate-300 flex flex-row justify-between relative items-center">
      <div className="flex justify-between w-full h-full">
        <Login toggleActive={toggleActive} />
        <Register toggleActive={toggleActive} />
      </div>

      <div
        className={`absolute top-0 left-0 h-full w-1/2 bg-four text-white flex items-center justify-center transition-all duration-700 ease-in-out ${
          isLoginActive ? 'left-0' : 'left-1/2'
        }`}
      >
        <div className="text-center">
          <h2 className="uppercase font-extrabold text-4xl text-transparent bg-clip-text bg-primary-gradient">WATCH ...</h2>
        </div>
      </div>
    </section>
  );
}
