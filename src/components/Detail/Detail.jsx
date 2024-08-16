import { useEffect } from "react";

const Detail = ({ item, onSelect: handleSelect }) => {
  if (!item) return null;
  const { title, backdrop_path, poster_path, release_date, overview, genres } =
    item;

  useEffect(() => {
    if (item) document.getElementById("my_modal_3").showModal();
  }, [item]);

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
        <div className="flex gap-x-10 mb-3">
          <div className="w-full h-[400px] max-w-[300px] -mt-[200px] pl-8 relative z-10">
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col mt-5">
            <h1 className="text-4xl font-bold mb-5">{title}</h1>
            <div className="text-2xl">
              {new Date(release_date).toLocaleDateString("en-GB")}
            </div>
            {genres.length > 0 && (
              <div className="text-center text-sm gap-x-5">
                {genres.map((item) => (
                  <span key={item.id}>{item.name}</span>
                ))}
              </div>
            )}
          </div>
        </div>
        <p className="text-xl px-4 text-center">DESC: {overview}</p>
      </div>
    </dialog>
  );
};

export default Detail;
