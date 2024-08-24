import { NavLink } from "react-router-dom";
import LoadingSpinner from "../loading/LoadingSpinner";

const Button = ({
  type = "button",
  onClick = () => {},
  children,
  isLoading,
  to,
  ...props
}) => {
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  if (to !== "" && typeof to === "string") {
    return (
      <NavLink to={to}>
        <button
          className="btn cursor-pointer p-[25px] py-0 leading-none border-none bg-primary rounded-lg font-semibold text-xl w-full disabled:opacity-0 disabled:pointer-events-none flex justify-center items-center hover:bg-primary hover:border-none text-white"
          type={type}
          onClick={onClick}
          {...props}
        >
          {child}
        </button>
      </NavLink>
    );
  }
  return (
    <button
      className="btn cursor-pointer p-[25px] py-0 leading-none border-none bg-primary rounded-lg font-semibold text-xl w-full disabled:opacity-[0.5] disabled:pointer-events-none flex justify-center items-center hover:bg-primary hover:border-none text-white"
      type={type}
      {...props}
    >
      {child}
    </button>
  );
};

export default Button;
