import movies from "../../assets/movies.svg";
import search from "../../assets/search.svg";

const MovieTitle = () => {
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
            className="w-full rounded-lg p-2 pl-10 outline-none"
          />
        </div>
      </section>
    </div>
  );
};

export default MovieTitle;
