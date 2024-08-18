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
    "fetchMovie",
    fetcher("https://absolute-pangolin-key.ngrok-free.app/api/movies/findAll", {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    })
  );

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
  console.log("🚀 ~ MovieList ~ data:", data);

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
      <Detail
        movie_id={movieSelected}
        onSelect={() => setMovieSelected(null)}
      />
    </div>
  );
};

export default MovieList;
