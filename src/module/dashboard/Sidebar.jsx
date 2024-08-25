import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase-app/firebase-config";
import { useAuth } from "../../context/auth-context";
import { signOut } from "firebase/auth";

const Sidebar = () => {
  const { userInfo } = useAuth();

  const Back = () => (
    <NavLink
      to={"/movies"}
      className="flex items-center gap-4 p-3 font-medium text-whitecursor-pointer mb-4 hover:bg-primary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
        />
      </svg>

      <span>Back</span>
    </NavLink>
  );
  const ProfileLink = () => (
    <NavLink
      to={`/profile?id=${userInfo?.id}`}
      className={({ isActive }) =>
        `flex items-center gap-4 p-3 font-medium text-white mb-4 cursor-pointer hover:bg-primary ${
          isActive ? "bg-primary text-primary" : ""
        }`
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      <span>Profile</span>
    </NavLink>
  );

  const HistoryLink = () => (
    <NavLink
      to={`/history?id=${userInfo?.id}`}
      className={({ isActive }) =>
        `flex items-center gap-4 p-3 font-medium text-white mb-4 cursor-pointer hover:bg-primary ${
          isActive ? "bg-primary text-primary" : ""
        }`
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        />
      </svg>
      <span>History</span>
    </NavLink>
  );

  const LogoutLink = () => (
    <NavLink
      className="flex items-center gap-4 p-3 font-medium text-whitecursor-pointer hover:bg-primary"
      to="/"
      onClick={() => signOut(auth)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
      <span>Logout</span>
    </NavLink>
  );

  return (
    <div className="w-[400px] hidden md:block p-4">
      <Back />
      <ProfileLink />
      <HistoryLink />
      <LogoutLink />
    </div>
  );
};

export default Sidebar;
