import "./App.css";
import MovieList from "./components/movie/MovieList";
import ListDay from "./components/Day/ListDay";
import Search from "./components/Search/Search";
import Showtime from "./components/Showtime/Showtime";
import DetailDisplay from "./components/Display/DetailDisplay";
import Seat from "./components/Seat/Seat";
import Price from "./components/Price/Price";
import Header from "./components/Header/header";
import Banner from "./components/banner/Banner";


function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <main>
        <Search></Search>
        <MovieList></MovieList>
        <ListDay></ListDay>

        <div className="flex gap-x-4 w-full mx-auto">
          <div className="w-[400px] min-h-[320px]">
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
