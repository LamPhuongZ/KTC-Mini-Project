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
// import { movieALL } from "../../../services/movieAPI";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedBuyTicket, setSelectedBuyTicket] = useMovie();
  const [search, setSearch] = useState("");
  const searchDebounce = useDebounce(search, 2000);
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/movie/popular?api_key=1a3129220019c29dcf55164c1f5b41dc"
  );
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;

  useEffect(() => {
    if (searchDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=1a3129220019c29dcf55164c1f5b41dc&query=${searchDebounce}`
      );
    } else {
      setUrl(
        "https://api.themoviedb.org/3/movie/popular?api_key=1a3129220019c29dcf55164c1f5b41dc"
      );
    }
  }, [searchDebounce]);

  // useEffect(() => {
  //   async function getMovieAll() {
  //     const response = await movieALL();
  //     setMovies(response);
  //   }
  //   getMovieAll();
  // }, []);

  // const { data } = useSWR(
  //   "fetchMovie",
  //   fetcher("https://absolute-pangolin-key.ngrok-free.app/api/movies/findAll", {
  //     headers: {
  //       "ngrok-skip-browser-warning": "69420",
  //     },
  //   })
  // );

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch(
  //       "https://absolute-pangolin-key.ngrok-free.app/api/movies/findAll",
  //       {
  //         headers: {
  //           "ngrok-skip-browser-warning": "69420",
  //         },
  //       }
  //     );

  //     console.log(res);
  //   })();
  // }, []);

  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);
  // console.log("🚀 ~ MovieList ~ data:", movies);

  // const handleSelect = (movie) => {
  //   setMovieSelected(movie);
  // };

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
