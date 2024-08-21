import useSWR from "swr";
import { useMovie } from "../context-movie/MovieContext";
import { fetcher } from "../../config";
import { useEffect, useState } from "react";

const Price = () => {
  const ticketPrice = 4.99;
  const [selectedBuyTicket, , selectedShowtime, , selectedSeats] = useMovie();
  const [movieTitle, setMovieTitle] = useState("Select a movie");
  const { data: movieData } = useSWR(
    selectedBuyTicket
      ? `https://api.themoviedb.org/3/movie/${selectedBuyTicket}?api_key=1a3129220019c29dcf55164c1f5b41dc`
      : null,
    fetcher
  );
  useEffect(() => {
    if (movieData) {
      setMovieTitle(movieData.title);
    }
  }, [movieData]);

  const total = selectedSeats.length * ticketPrice;

  return (
    <div className="w-[500px]">
      <div className="bg-slate-800 p-5 rounded-lg flex flex-col">
        <h2 className="text-2xl font-medium">Price</h2>
        <div className="flex items-center justify-between mt-3">
          <div className="text-xl font-medium">Movie: </div>
          <div className="flex gap-x-5">
            <span className="py-2 text-xl font-bold">{movieTitle}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="text-xl font-medium w-[100px]">2 Ticket</div>
          <div className="flex gap-2 flex-wrap">
            {selectedSeats.length > 0 ? (
              selectedSeats.map((seat) => (
                <span
                  className="text-lg font-medium bg-slate-600 rounded-lg py-1 px-4"
                  key={seat.id}
                >
                  {seat}
                </span>
              ))
            ) : (
              <span className="py-2 text-xl font-bold">Select seats</span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="text-xl font-medium">Show time : </div>
          <div className="flex gap-x-5">
            <span className="py-2 text-xl font-bold">
              {selectedShowtime || "Select a showtime"}
            </span>
          </div>
        </div>
        <div className="border border-solid mt-4"></div>
        <div className="flex items-center justify-between mt-5">
          <div className="text-xl font-medium">Sub total : </div>
          <span className="text-2xl font-medium">$ {total}</span>
        </div>
        <button
          className="btn grow mt-5 text-white bg-third border border-none hover:bg-third text-xl font-medium
        "
        >
          Payment
        </button>
      </div>
    </div>
  );
};

export default Price;
