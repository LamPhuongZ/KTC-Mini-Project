import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieCard from "./MovieCard";
import { fetcher } from "../../config";
import useSWR from "swr";
import { useEffect, useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const { data, error, isLoading } = useSWR(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=1a3129220019c29dcf55164c1f5b41dc",
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.map((item) => (
          <SwiperSlide 
          key={item.id}>
            <MovieCard item={item}></MovieCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
