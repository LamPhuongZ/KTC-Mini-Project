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
  const {
    name,
    posterImageUrl,
    bannerImageUrl,
    releaseDate,
    description,
    rating,
    trailer,
    cast,
  } = data.data;
  const castArray = cast ? cast.split(", ") : [];

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box text-white rounded-lg w-[100%] max-w-[1400px] h-[700px] max-h-[650px] bg-slate-900 p-0 pb-3">
        <form method="dialog" className="sticky top-0 z-10">
          <button
            onClick={() => handleSelect()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl rounded-xl text-white"
          >
            X
          </button>
        </form>
        <div className="w-full h-[300px] sm:h-[500px] relative">
          <div className="absolute bg-black bg-opacity-50 inset-0"></div>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${bannerImageUrl})`,
            }}
          ></div>
        </div>
        <div className="flex flex-col sm:flex-row gap-x-0 sm:gap-x-10 mb-5">
          <div className="w-full sm:w-[50%] h-[200px] sm:h-[400px] max-w-[300px] -mt-0 sm:-mt-[200px] pl-8 relative z-0">
            <img
              src={`${posterImageUrl}`}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col mt-5 sm:mt-0">
            <h1 className="text-4xl font-bold mb-5">{name}</h1>
            <div className="flex justify-between">
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

        <div className="px-10 py-5">
          <h3 className="mb-5 text-xl">Trailer:</h3>
          <div className="w-full h-[300px] sm:h-[700px] aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={trailer}
              allowFullScreen
              className="w-full h-full object-fill"
            ></iframe>
          </div>
        </div>
        <div className="mx-auto md:w-[700px] sticky bottom-0 z-50 sm:w-[500px]">
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

export default Detail;
