import useSWR from "swr";
import { useMovie } from "../context/MovieContext";
import { fetcher } from "../../config";
import { useEffect, useState } from "react";

const Price = () => {
  const [selectedBuyTicket] = useMovie();
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

  return (
    <div className="w-[500px]">
      <div className="bg-slate-800 p-5 rounded-lg flex flex-col">
        <h2 className="text-2xl font-medium">Price</h2>
        <div className="flex items-center justify-between mt-3">
          <div className="text-xl font-medium">Movie: </div>
          <div className="flex gap-x-5">
            <span className="p-2 text-xl font-bold">{movieTitle}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="text-xl font-medium">2 Ticket</div>
          <div className="flex gap-x-5">
            <span className="text-lg font-medium bg-slate-600 rounded-lg py-1 px-6">
              10
            </span>
            <span className="text-lg font-medium bg-slate-600 rounded-lg py-1 px-6">
              10
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="text-xl font-medium">Show time : </div>
          <span className="p-2 text-lg">1:00 PM - 3:15 PM</span>
        </div>
        <div className="border border-solid mt-4"></div>
        <div className="flex items-center justify-between mt-5">
          <div className="text-xl font-medium">Sub total : </div>
          <span className="text-2xl font-medium">99.99$</span>
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
