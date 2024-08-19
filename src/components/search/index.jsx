// import { useEffect, useState } from "react";
import movies from "../../assets/movies.svg";
import search from "../../assets/search.svg";
// import { useDebounce } from "@uidotdev/usehooks";

const Search = () => {
  // const [filter, setFilter] = useState("");
  // const filterDebounce = useDebounce(filter, 1000);
  // const handleFilterChange = (e) => {
  //   setFilter(e.target.value);
  // };

  // useEffect(() => {
  //   if (filterDebounce) {
  //     `https://api.themoviedb.org/3/search/movie?api_key=1a3129220019c29dcf55164c1f5b41dc&query=${filterDebounce}`;
  //   } else {
  //     `https://api.themoviedb.org/3/movie/now_playing?api_key=1a3129220019c29dcf55164c1f5b41dc&query=${filterDebounce}`;
  //   }
  // });

  return (
    <div>
      <section className="moive-title flex items-center justify-between mb-10">
        <div className="flex items-center gap-x-2">
          <img src={movies} alt="" className="w-8 h-8" />
          <h2 className="capitalize text-2xl font-bold">Film</h2>
        </div>
        <div className="relative w-96">
          <img
            src={search}
            alt=""
            className="w-6 h-6 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            name="movies"
            id="moives"
            placeholder="Search ..."
            className="w-full rounded-lg p-2 pl-10 outline-none text-black"
            // onChange={handleFilterChange}
          />
        </div>
      </section>
    </div>
  );
};

export default Search;
