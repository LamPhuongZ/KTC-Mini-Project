import { useEffect, useState } from "react";
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
            <div className="flex gap-x-2 items-center text-third hover:underline">
              <Link
                className="p-4 text-xl cursor-pointer"
                to={`/profile/?id=${user?.id}`}
              >
                {user?.name}
              </Link>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
