import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieCard from "./movie-card";
import { fetcher } from "../../../config";
import useSWR from "swr";
import { useEffect, useState } from "react";
import Detail from "../../detail";
import moviesIcon from "../../../assets/movies.svg";
import searchIcon from "../../../assets/search.svg";
import { useDebounce } from "@uidotdev/usehooks";
import { useMovie } from "../../context-movie/MovieContext";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedBuyTicket, setSelectedBuyTicket] = useMovie();
  const [search, setSearch] = useState("");
  const searchDebounce = useDebounce(search, 2000);
  const [url, setUrl] = useState(
    "https://apparently-uncommon-gopher.ngrok-free.app/api/movies"
  );
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  

  useEffect(() => {
    if (searchDebounce) {
      setUrl(
        `https://apparently-uncommon-gopher.ngrok-free.app/api/movies/title?title=${searchDebounce}`
      );
    } else {
      setUrl("https://apparently-uncommon-gopher.ngrok-free.app/api/movies");
    }
  }, [searchDebounce]);

  useEffect(() => {
    if (data && data.data.movies) setMovies(data.data.movies);
  }, [data]);

  const handleSelect = (movie) => {
    setSelectedBuyTicket(movie.id);
  };

  return (
    <section>
      <div className="moive-title flex items-center justify-between mb-10">
        <div className="flex items-center gap-x-2">
          <img src={moviesIcon} alt="" className="w-8 h-8" />
          <h2 className="capitalize text-2xl font-bold">Film</h2>
        </div>
        <div className="relative w-96">
          <img
            src={searchIcon}
            alt=""
            className="w-6 h-6 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            name="movies"
            id="moives"
            placeholder="Search ..."
            className="w-full rounded-lg p-2 pl-10 outline-none text-black"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="movie-list mb-10">
        {loading && (
          <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin"></div>
        )}
        <Swiper grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}>
          {!loading &&
            movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item} onSelect={handleSelect}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>

        <Detail
          movie_id={selectedBuyTicket}
          onSelect={() => setSelectedBuyTicket(null)}
        />
      </div>
    </section>
  );
};

export default MovieList;
