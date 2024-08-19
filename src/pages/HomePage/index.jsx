import Banner from "../../components/banner";
import ListDay from "../../components/day";
import DetailDisplay from "../../components/display";
import Header from "../../components/header";
import MovieList from "../../components/movie/movie-list";
import Price from "../../components/price";
import Search from "../../components/search";
import Seat from "../../components/seat";
import Showtime from "../../components/showtime";

export function HomePage() {
  return (
    <>
      <Header />
      <Banner />

      <main>
        <Search />
        <MovieList />
        <ListDay />

        <div className="flex gap-x-4 w-full mx-auto">
          <div className="w-[500px] min-h-[320px]">
            <DetailDisplay />
            <Showtime />
          </div>
          <Seat />
          <Price />
        </div>
      </main>
    </>
  );
}
