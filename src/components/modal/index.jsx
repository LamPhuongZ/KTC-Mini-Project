import { useState } from "react";
import { Login } from "./login";
import { Register } from "./register";
import PropTypes from "prop-types";

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isClose: PropTypes.func.isRequired,
};

export function Modal({ isOpen, isClose }) {
  if (!isOpen) return null;

  const [isLoginActive, setIsLoginActive] = useState(true);

  const toggleActive = () => {
    setIsLoginActive(!isLoginActive);
  };

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-8/12 h-5/6 bg-slate-300 flex flex-row justify-between relative items-center z-50">
        <div className="flex justify-between w-full h-full">
          <Login toggleActive={toggleActive} />
          <Register toggleActive={toggleActive} />
        </div>

        <div
          className={`absolute top-0 left-0 h-full w-1/2 bg-four text-white flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
            isLoginActive ? "left-0" : "left-1/2"
          }`}
        >
          <div className="text-center">
            <h2 className="uppercase font-extrabold text-4xl text-transparent bg-clip-text bg-primary-gradient">
              WATCH ...
            </h2>
          </div>
          <button
            className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-md"
            onClick={isClose}
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
}
