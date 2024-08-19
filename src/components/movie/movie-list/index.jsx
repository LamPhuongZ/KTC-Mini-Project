import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieCard from "./movie-card";
import { fetcher } from "../../../config";
import useSWR from "swr";
import { useEffect, useState } from "react";
import Detail from "../../detail";
// import { movieALL } from "../../../services/movieAPI";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [movieSelected, setMovieSelected] = useState();

  const { data } = useSWR(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=1a3129220019c29dcf55164c1f5b41dc",
    fetcher
  );

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
  console.log("🚀 ~ MovieList ~ data:", movies);

  // const handleSelect = (movie) => {
  //   setMovieSelected(movie);
  // };
  const handleSelect = (movie) => {
    setMovieSelected(movie.id);
  };

  return (
    <div className="movie-list mb-10">
      <Swiper grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item} onSelect={handleSelect}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
      <Detail movie_id={movieSelected} onSelect={() => setMovieSelected()} />
    </div>
  );
};

export default MovieList;
