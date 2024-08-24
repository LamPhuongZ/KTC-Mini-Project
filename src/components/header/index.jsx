import { useState } from "react";
import { Modal } from "../Modal";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-app/firebase-config";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { useAuth } from "../../context/auth-context";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/useSlice";

const Header = () => {
  const { token } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignin = () => {
    // Chuyển sang trang /login
    navigate("/");
  };

  const handleLogOut = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };


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
          {/* {!token ? (
            <Button type="button" style={{ maxWidth: 200 }} to="/">
              Sign In
            </Button>
          ) : (
            <Link
              className="p-4 text-xl cursor-pointer"
              to={`/profile/?id=${userInfo?.id}`}
            >
              {userInfo?.displayName}
            </Link>
          )} */}
        </div>
      </header>
    </>
  );
};

export default Header;
