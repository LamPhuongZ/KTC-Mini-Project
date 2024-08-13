const ListDay = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div>
      <div className=" bg-slate-800 p-5 rounded-lg">
        <section className="Day grid grid-cols-7 gap-4">
          {daysOfWeek.map((day, index) => (
            <button
              type="button"
              key={index}
              className="p-3 text-center rounded-xl bg-slate-900 border-2 border-solid hover:bg-third hover:border-none hover:font-bold"
            >
              {day}
            </button>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ListDay;
