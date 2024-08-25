import { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/css/pagination";
import useSWR from "swr";
import { fetcher } from "../../config";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(
    "https://apparently-uncommon-gopher.ngrok-free.app/api/movies",
    fetcher
  );
  useEffect(() => {
    if (data && data.data.movies) setMovies(data.data.movies);
  }, [data]);
  return (
    <section className="banner lg:h-[500px] mb-10 overflow-hidden rounded-lg md:h-[450px] sm:h-[400px]">
      <Swiper
        grabCursor={"true"}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const { name, description, bannerImageUrl } = item;
  return (
    <div className="w-full h-full relative ">
      <img src={`${bannerImageUrl}`} alt="" className="w-full h-full object-cover" />
      <div className="absolute left-5 bottom-0">
        <h2 className="capitalize font-bold text-3xl mb-5">{name}</h2>
        <div className="flex gap-x-3 max-w-[500px] mb-5 leading-7">
          {description}
        </div>
      </div>
    </div>
  );
}

export default Banner;
