import { useState } from "react";
import { Modal } from "../Modal";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-app/firebase-config";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { useAuth } from "../../context/auth-context";

const Header = () => {
  // const [isShowModal, setIsShowModal] = useState(false);

  // const handleToggleModal = () => {
  //   setIsShowModal(!isShowModal);
  // };

  const { userInfo } = useAuth();
  // console.log("🚀 ~ Header ~ userInfo:", userInfo);

  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth);
  };

  function getLastName(name) {
    if (!name) return "";
    const length = name.split(" ").length;
    return name.split(" ")[length - 1];
  }

  return (
    <>
      <header className="header flex items-center justify-between mb-7">
        <NavLink
          to="/movies"
          className="capitalize font-extrabold text-4xl text-transparent bg-clip-text bg-primary-gradient cursor-pointer"
        >
          watch ..?
        </NavLink>
        <div className="flex gap-x-5">
          <Button
            type="button"
            style={{ maxWidth: 200 }}
            onClick={handleSignOut}
            to="/login"
          >
            Log out
          </Button>
          {!userInfo ? (
            <Button type="button" style={{ maxWidth: 200 }} to="/login">
              Sign In
            </Button>
          ) : (
            <strong className="p-4 text-xl cursor-pointer">{userInfo?.displayName}</strong>
          )}
        </div>
      </header>
      {/* 
      <Modal isOpen={isShowModal} isClose={handleToggleModal} /> */}
    </>
  );
};

export default Header;
