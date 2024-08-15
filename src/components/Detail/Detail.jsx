import { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../../config";

const Detail = ({ movie_id, onSelect: handleSelect }) => {
  const { data } = useSWR(
    movie_id
      ? `https://api.themoviedb.org/3/movie/${movie_id}?api_key=1a3129220019c29dcf55164c1f5b41dc`
      : null,
    fetcher
  );

  useEffect(() => {
    if (data) {
      document.getElementById("my_modal_3").showModal();
    }
  }, [data]);

  if (!data) return null;
  const { title, backdrop_path, poster_path, release_date, overview } = data;

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
            <div className="text-xl mb-5">
              {new Date(release_date).toLocaleDateString("en-GB")}
            </div>
          </div>
        </div>
        <p className="text-lg px-10 ">DESC: {overview}</p>
      </div>
    </dialog>
  );
}; 

export default Detail;
