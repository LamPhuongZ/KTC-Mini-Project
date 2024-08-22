import { useMovie } from "../context-movie/MovieContext";

const Showtime = () => {
  const [, , selectedShowtime, setSelectedShowtime, , , isTicketBought] =
    useMovie();
  if (!isTicketBought) {
    return null;
  }
  const handleSelectShowtime = (showtime) => {
    setSelectedShowtime((preShowtime) =>
      preShowtime === showtime ? "" : showtime
    );
  };

  return (
    <div className="bg-slate-800 p-3 rounded-lg min-h-[370px] w-[300px]">
      <h2 className="text-xl font-medium">Select showtime</h2>
      <div className="flex flex-col gap-y-5 mt-5">
        <span
          className={`inline-block w-full p-3 rounded-full text-lg cursor-pointer text-center hover:bg-third hover:border-none hover:font-bold ${
            selectedShowtime === "13:00 PM - 15:15 PM"
              ? "bg-primary text-white font-semibold"
              : "bg-slate-600 text-white"
          }`}
          onClick={() => handleSelectShowtime("13:00 PM - 15:15 PM")}
        >
          13:00 PM - 15:15 PM
        </span>
        <span
          className={`inline-block w-full p-3 rounded-full text-lg cursor-pointer text-center hover:bg-third hover:border-none hover:font-bold ${
            selectedShowtime === "20:00 PM - 22:15 PM"
              ? "bg-primary text-white font-semibold"
              : "bg-slate-600 text-white"
          }`}
          onClick={() => handleSelectShowtime("20:00 PM - 22:15 PM")}
        >
          20:00 PM - 22:15 PM
        </span>
      </div>
    </div>
  );
};

export default Showtime;
