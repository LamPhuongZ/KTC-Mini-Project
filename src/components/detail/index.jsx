import { useEffect } from "react";
import { fetcher } from "../../config";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMovie } from "../context-movie/MovieContext";
import { useAuth } from "../../context/auth-context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = ({ movie_id, onSelect: handleSelect }) => {
  const { data } = useSWR(
    movie_id
      ? `https://apparently-uncommon-gopher.ngrok-free.app/api/movies/id?id=${movie_id}`
      : null,
    fetcher
  );

  const [, setSelectedBuyTicket, , , , , , setIsTicketBought] = useMovie();
  const { token } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  const handleBuyTicket = () => {
    if (!token) {
      toast.warning("Please login or create an account!");
      navigate("/");
    } else {
      if (data && data.data.id) {
        setSelectedBuyTicket(data.data.id);
        setIsTicketBought(true);
        handleSelect();
      }
    }
  };

  useEffect(() => {
    if (data && data.data) document.getElementById("my_modal_3").showModal();
  }, [data]);

  if (!data) return null;
  const { name, imageUrl, releaseDate, description, rating, trailer, cast } =
    data.data;
  const castArray = cast ? cast.split(", ") : [];

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box text-white rounded-lg w-[1400px] max-w-none h-[700px] max-h-[650px] bg-slate-900 p-0 pb-3">
        <form method="dialog" className="sticky top-0 z-10">
          <button
            onClick={() => handleSelect()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl rounded-xl text-white"
          >
            X
          </button>
        </form>
        <div className="w-full h-[500px] relative">
          <div className="absolute bg-black bg-opacity-50 inset-0"></div>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          ></div>
        </div>
        <div className="flex gap-x-10 mb-5">
          <div className="w-full h-[400px] max-w-[300px] -mt-[200px] pl-8 relative z-0">
            <img
              src={`${imageUrl}`}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col mt-5">
            <h1 className="text-4xl font-bold mb-5">{name}</h1>
            <div className="flex justify-between w-[300px]">
              <div className="text-2xl mb-5">
                {new Date(releaseDate).toLocaleDateString("en-GB")}
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
                  <span className="text-lg">{rating}</span>
                </div>
              </span>
            </div>
            {castArray.length > 0 && (
              <div className="flex text-center text-sm gap-x-5">
                {castArray.map((actor, index) => (
                  <span
                    key={index}
                    className="rounded-xl border border-solid p-2"
                  >
                    {actor}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <p className="text-xl px-10 text-center">DESC: {description}</p>
        {/* <div className="px-10 py-5">
          <h2 className="text-xl mb-5">Casts:</h2>
          <div className="px-4">
            <Swiper
              grabCursor={"true"}
              spaceBetween={10}
              slidesPerView={"auto"}
            >
              {credits?.cast?.length > 0 &&
                credits.cast.slice(0, 10).map((item) => (
                  <SwiperSlide key={item.id}>
                    <CastItem item={item}></CastItem>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div> */}
        <div className="px-10 py-5">
          <h3 className="mb-5 text-xl">Trailer:</h3>
          <div className="w-full h-[700px] aspect-video">
            <iframe
              width="1080"
              height="720"
              src={trailer}
              allowFullScreen
              className="w-full h-full object-fill"
            ></iframe>
          </div>
        </div>
        <div className="mx-auto w-[700px] sticky bottom-0 z-50">
          <button
            className="btn btn-block bg-primary border-none uppercase text-xl text-white hover:bg-primary"
            onClick={handleBuyTicket}
          >
            buy ticket
          </button>
        </div>
      </div>
    </dialog>
  );
};

// function CastItem({ item }) {
//   const { name, profile_path } = item;
//   return (
//     <div className="cast-item select-none">
//       <img
//         src={`http://image.tmdb.org/t/p/original/${profile_path}`}
//         alt=""
//         className="w-full h-[350px] object-cover rounded"
//       />
//       <h3 className="text-xl font-medium text-center">{name}</h3>
//     </div>
//   );
// }

export default Detail;
