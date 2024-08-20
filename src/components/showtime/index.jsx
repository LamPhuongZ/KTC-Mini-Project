const Showtime = () => {
  return (
    <div>
      <div className="bg-slate-800 p-5 rounded-lg min-h-[370px] w-[300px]">
        <h2 className="text-lg font-medium">Select showtime</h2>
        <div className="flex flex-col gap-y-5 mt-5">
          <span className="inline-block w-full p-3 rounded-full bg-slate-600 text-lg cursor-pointer text-center hover:bg-primary hover:font-bold">
            13:00 PM - 15:15 PM
          </span>
          <span className="inline-block w-full p-3 rounded-full bg-slate-600 text-lg cursor-pointer text-center hover:bg-primary hover:font-bold">
            20:00 PM - 22:15 PM
          </span>
        </div>
      </div>
    </div>
  );
};

export default Showtime;
