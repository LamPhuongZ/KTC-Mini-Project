
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
      <section className="Day grid grid-cols-7 gap-4 mb-7">
        {daysOfWeek.map((day, index) => (
          <button
            type="button"
            key={index}
            className="p-3 text-center rounded-lg border border-solid hover:bg-third hover:border-none hover:font-bold"
          >
            {day}
          </button>
        ))}
      </section>
      <div className="w-full border border-solid rounded-md mb-10"></div>
    </div>
  );
};

export default ListDay;
