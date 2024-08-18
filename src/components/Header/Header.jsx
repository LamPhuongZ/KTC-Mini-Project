import { useState } from "react";
import { Modal } from "../Modal";

const Header = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleToggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <>
      <header className="header flex items-center justify-between mb-7">
        <div className="uppercase font-extrabold text-4xl text-transparent bg-clip-text bg-primary-gradient ">
          watch ..?
        </div>
        <div className="flex gap-x-5">
          <button
            className="rounded-md bg-pink-500 px-4 py-2"
            onClick={handleToggleModal}
          >
            Login
          </button>
          {/* <button className="rounded-md px-4 py-2">Register</button> */}
        </div>
      </header>

      <Modal isOpen={isShowModal} isClose={handleToggleModal} />
    </>
  );
};

export default Header;
