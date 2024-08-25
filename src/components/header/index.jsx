import { useEffect, useState } from "react";
import { Modal } from "../Modal";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-app/firebase-config";
import { Link, NavLink } from "react-router-dom";
import Button from "../button/Button";
import { getMeAPI } from "../../redux/services/userAPI";
import { useSelector } from "react-redux";

const Header = () => {
  const [user, setUser] = useState({});
  const { token } = useSelector((state) => state.userReducer);
  const getMe = async () => {
    const response = await getMeAPI();
    setUser(response);
  };

  useEffect(() => {
    getMe();
  }, []);


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
          {!token ? (
            <Button type="button" style={{ maxWidth: 200 }} to="/">
              Sign In
            </Button>
          ) : (
            <Link
              className="p-4 text-xl cursor-pointer"
              to={`/profile/?id=${user?.id}`}
            >
              {user?.name}
            </Link>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
