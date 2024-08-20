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
import { MovieProvider } from "../../components/MovieContext";
export function HomePage() {
  return (
    <MovieProvider>
      <Header />
      <Banner />
      <main>
        {/* <Search /> */}
        <MovieList />
        {/* <ListDay /> */}

        <div>
          <div className="flex items-center gap-x-2 mb-3">
            <img src={ticketIcon} alt="" className="w-9 h-9" />
            <h2 className="capitalize text-2xl font-bold">Order:</h2>
          </div>
          <div className="flex gap-x-4 w-full mx-auto">
            {/* <DetailDisplay /> */}
            <Showtime />
            <Seat />
            <Price />
          </div>
        </div>
      </main>
    </MovieProvider>
  );
}
