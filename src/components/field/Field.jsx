const Field = ({ children }) => {
  return (
    <div className="flex flex-col gap-y-5 items-start mb-[25px] last:mb-3 ">
      {children}
    </div>
  );
};

export default Field;
