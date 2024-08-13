/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/scss";
import 'swiper/css/pagination';
import useSWR from "swr";
import { fetcher } from "../../config";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=1a3129220019c29dcf55164c1f5b41dc",
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);
  return (
    <section className="banner container h-[700px] mb-10 overflow-hidden">
      <Swiper
        grabCursor={"true"}
        spaceBetween={40}
        slidesPerView={"auto"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination  ]}
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
  // eslint-disable-next-line react/prop-types
  const { title, backdrop_path, overview } = item;
  return (
    <div className="w-full h-full relative">
      <div className="overplay absolute inset-0 bg-gradient-to-t from-[rgba(105,104,104,0.5)] to-[rgba(0,0,0,0.5)]"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute left-5 bottom-0">
        <h2 className="capitalize font-bold text-3xl mb-5">{title}</h2>
        <div className="flex gap-x-3 max-w-[500px] mb-5 leading-7">
          {overview}
        </div>
      </div>
    </div>
  );
}

export default Banner;
