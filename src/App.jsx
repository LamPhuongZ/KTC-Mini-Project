import "./App.css";
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";
import ListDay from "./components/day/ListDay";
import MovieTitle from "./components/movie/MovieTitle";
import Showtime from "./components/Showtime/Showtime";
import DetailDisplay from "./components/detailDisplay/DetailDisplay";
import Seat from "./components/Seat/Seat";
import Price from "./components/Price/Price";

function App() {
  return (
    <>
      <header className="header flex items-center justify-between mb-7">
        <div className="uppercase font-extrabold text-4xl text-transparent bg-clip-text bg-primary-gradient ">
          watch ..?
        </div>
        <div className="flex gap-x-5">
          <button className="rounded-md bg-pink-500 px-4 py-2">Login</button>
          <button className="rounded-md px-4 py-2">Register</button>
        </div>
      </header>
      <Banner></Banner>
      <main>
        <MovieTitle></MovieTitle>
        <MovieList></MovieList>
        <ListDay></ListDay>

        <div className="flex gap-x-4 w-full mx-auto">
          <div className="w-[400px] min-h-[420px]">
            <DetailDisplay></DetailDisplay>
            <Showtime></Showtime>
          </div>
          <Seat></Seat>
          <Price></Price>
        </div>
      </main>
    </>
  );
}

export default App;
