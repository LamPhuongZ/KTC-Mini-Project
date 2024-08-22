import { useController } from "react-hook-form";

const Input = ({
  name = "",
  type = "text",
  children,
  hasIcon = false,
  control,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative w-full">
      <input
        id={name}
        type={type}
        {...field}
        {...props}
        className={`input-field w-full p-4 bg-[#E7ECF3] rounded-[6px] focus:bg-white text-black ${
          children ? "px-5 pr-[60px] pl-[20px]" : "p-5"
        }`}
      />
      {children ? <div className="icon-eye">{children}</div> : null}
    </div>
  );
};

export default Input;
