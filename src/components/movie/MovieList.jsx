import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieCard from "./MovieCard";
import { fetcher } from "../../config";
import useSWR from "swr";
import { useEffect, useState } from "react";
import Detail from "../Detail/Detail";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const [movieSelected, setMovieSelected] = useState();

  const { data } = useSWR(
    "https://api.themoviedb.org/3/movie/popular?api_key=1a3129220019c29dcf55164c1f5b41dc",
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);
  console.log("🚀 ~ MovieList ~ data:", data);

  const handleSelect = (movie) => {
    setMovieSelected(movie);
  };

  return (
    <div className="movie-list mb-10">
      <Swiper grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item} onSelect={handleSelect} />
            </SwiperSlide>
          ))}
      </Swiper>
      
      <Detail item={movieSelected} onSelect={handleSelect} />
    </div>
  );
};

export default MovieList;
