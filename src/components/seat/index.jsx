import { useMovie } from "../context-movie/MovieContext";
import screen from "../../assets/screen.png";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { seatsAPI } from "../../redux/services/seatAPI";

const Seat = () => {
  const [, , , , selectedSeats, setSelectedSeats, isTicketBought] = useMovie();
  if (!isTicketBought) {
    return null;
  }
  const max = 4;
  const handleSelectSeat = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      if (selectedSeats.length < max) {
        setSelectedSeats([...selectedSeats, seatNumber]);
      } else {
        Swal.fire({
          background: "rgb(30 41 59)",
          color: "#fff",
          icon: "error",
          title: "Oops...",
          text: "You can only select up to 4 seats!",
        });
      }
    }
  };

  const [seats, setSeats] = useState([]);
  const fetchSeats = async () => {
    const response = await seatsAPI();
    setSeats(response.data);
  };

  useEffect(() => {
    fetchSeats();
  }, []);

  console.log(seats);

  return (
    <div className="bg-slate-800 p-3 min-w-[700px] rounded-lg flex-grow">
      <h2 className="font-medium text-xl ">Select seats</h2>
      <div className="flex justify-center">
        <img src={screen} alt="" className="mb-7 object-cover w-[500px]" />
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-5 gap-y-5 gap-x-10">
          {/* {Array.from({ length: 30 }).map((_, index) => (
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
          ))}  */}

          {seats.map((seat, index) => (
            <div
              key={index}
              className={`w-16 h-8 rounded-md flex items-center justify-center text-white cursor-pointer hover:bg-third hover:border-none hover:font-bold ${
                selectedSeats.includes(seat)
                  ? "bg-primary font-semibold"
                  : "bg-slate-500"
              }`}
              onClick={() => handleSelectSeat(seat)}
            >
              {seat.seatNumber}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seat;
