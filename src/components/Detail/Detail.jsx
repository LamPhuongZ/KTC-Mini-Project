/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import { fetcher } from "../../config";
import useSWR from "swr";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";

const Detail = ({ movie_id, onSelect: handleSelect }) => {
  const { data } = useSWR(
    movie_id
      ? `https://api.themoviedb.org/3/movie/${movie_id}?api_key=1a3129220019c29dcf55164c1f5b41dc`
      : null,
    fetcher
  );

  const useMovieCredits = (movie_id) => {
    const { data } = useSWR(
      movie_id
        ? `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=1a3129220019c29dcf55164c1f5b41dc`
        : null,
      fetcher
    );
    return {
      credits: data,
    };
  };

  const { credits } = useMovieCredits(movie_id);

  useEffect(() => {
    if (data) document.getElementById("my_modal_3").showModal();
  }, [data]);

  if (!data) return null;
  const {
    title,
    backdrop_path,
    poster_path,
    release_date,
    overview,
    genres,
    vote_average,
  } = data;

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box text-white rounded-lg w-[1400px] max-w-none h-[700px] max-h-[650px] bg-slate-900 p-0 pb-3">
        <form method="dialog">
          <button
            onClick={() => handleSelect()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl rounded-xl text-white z-10"
          >
            X
          </button>
        </form>
        <div className="w-full h-[500px] relative">
          <div className="absolute bg-black bg-opacity-50 inset-0"></div>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
            }}
          ></div>
        </div>
        <div className="flex gap-x-10 mb-5">
          <div className="w-full h-[400px] max-w-[300px] -mt-[200px] pl-8 relative z-10">
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col mt-5">
            <h1 className="text-4xl font-bold mb-5">{title}</h1>
            <div className="flex justify-between w-[300px]">
              <div className="text-2xl mb-5">
                {new Date(release_date).toLocaleDateString("en-GB")}
              </div>
              <span className=" rounded-lg p-1">
                <div className="flex items-center gap-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#FFAA01"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{vote_average.toFixed(1)}</span>
                </div>
              </span>
            </div>
            {genres.length > 0 && (
              <div className="flex text-center text-sm gap-x-5">
                {genres.map((item) => (
                  <span
                    key={item.id}
                    className=" rounded-xl border border-solid p-2"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <p className="text-xl px-10 text-center">DESC: {overview}</p>
        {/* <div className="p-10">
          <h2 className="text-xl mb-10">Casts:</h2>
          <div className=" px-4">
            <Swiper
              grabCursor={"true"}
              spaceBetween={30}
              slidesPerView={"auto"}
            >
              {cast.length > 0 &&
                cast.map((item) => (
                  <SwiperSlide key={item.id}>
                    <CreditItem item={item}></CreditItem>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div> */}
      </div>
    </dialog>
  );
};

// function CreditItem({ item }) {
//   const { name, profile_path } = item;
//   return (
//     <div className="cast-item select-none">
//       <img
//         src={`http://image.tmdb.org/t/p/original/${profile_path}`}
//         alt=""
//         className="w-full h-[350px] object-cover rounded-lg"
//       />
//       <h3 className="text-xl font-medium">{name}</h3>
//     </div>
//   );
// }

export default Detail;
