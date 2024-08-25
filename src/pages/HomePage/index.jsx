import Banner from "../../components/banner";
// import ListDay from "../../components/day";
// import DetailDisplay from "../../components/display";
import Header from "../../components/header";
import MovieList from "../../components/movie/movie-list";
import Price from "../../components/price";
// import Search from "../../components/search";
import Seat from "../../components/seat";
import Showtime from "../../components/showtime";
import ticketIcon from "../../assets/ticket.svg";
import { MovieProvider } from "../../components/context-movie/MovieContext";
import { useEffect } from "react";

export function HomePage() {
  useEffect(() => {
    document.title = "KTC Cinema";
  });
  return (
    <div className="bg-slate-900 font-body p-4 text-white">
      <MovieProvider>
        <Header />
        <Banner />
        <main>
          <MovieList />

          <div>
            <div className="flex items-center gap-x-2 mb-3">
              <img src={ticketIcon} alt="" className="w-9 h-9" />
              <h2 className="capitalize text-2xl font-bold">Order:</h2>
            </div>
            <div className="flex flex-col gap-x-4 w-full mx-auto lg:flex-row md:gap-y-4 sm:gap-y-3 ">
              <Showtime />
              <Seat />
              <Price />
            </div>
          </div>
        </main>
      </MovieProvider>
    </div>
  );
}
