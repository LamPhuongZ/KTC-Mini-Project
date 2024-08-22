import LoadingSpinner from "../loading/LoadingSpinner";

const Button = ({
  type = "button",
  onClick = () => {},
  children,
  isLoading,
  ...props
}) => {
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  return (
    <button
      className="btn cursor-pointer p-[25px] py-0 leading-none border-none bg-primary rounded-lg font-semibold text-xl w-full disabled:opacity-[0.5] disabled:pointer-events-none flex justify-center items-center hover:bg-primary hover:border-none text-white"
      type={type}
      onClick={onClick}
      {...props}
    >
      {child}
    </button>
  );
};

export default Button;
