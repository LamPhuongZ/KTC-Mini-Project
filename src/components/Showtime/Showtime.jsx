const Showtime = () => {
  return (
    <section>
      <div className="bg-slate-800 p-5 mt-5 rounded-lg min-h-[150px]">
        <h2 className="text-lg font-medium">Select showtime</h2>
        <div className="flex gap-x-10 mt-5">
          <span className="inline-block p-2 rounded-full bg-slate-600 text-sm cursor-pointer hover:bg-primary">
            1:00 PM - 3:15 PM
          </span>
          <span className="inline-block p-2 rounded-full bg-slate-600 text-sm cursor-pointer hover:bg-primary">
            3:00 PM - 5:15 PM
          </span>
        </div>
      </div>
    </section>
  );
};

export default Showtime;
