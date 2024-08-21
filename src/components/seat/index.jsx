import { useMovie } from "../context/MovieContext";
import screen from "../../assets/screen.png"

const Seat = () => {
  const [, , , , selectedSeats, setSelectedSeats] = useMovie();
  const max = 4;
  const handleSelectSeat = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      if (selectedSeats.length < max) {
        setSelectedSeats([...selectedSeats, seatNumber]);
      } else {
        alert("Maximum seats reached!");
      }
    }
  };

  return (
    <div className="bg-slate-800 p-3 min-w-[700px] rounded-lg flex-grow">
      <h2 className="font-medium text-xl text-white">Select seat</h2>
      <div className="flex justify-center">
        <img src={screen} alt="" className="mb-7 object-cover w-[500px]" />
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-5 gap-3 gap-x-7">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className={`w-16 h-8 rounded-md flex items-center justify-center text-white cursor-pointer hover:bg-third hover:border-none hover:font-bold ${
                selectedSeats.includes(index + 1)
                  ? "bg-primary font-semibold"
                  : "bg-slate-500"
              }`}
              onClick={() => handleSelectSeat(index + 1)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seat;
