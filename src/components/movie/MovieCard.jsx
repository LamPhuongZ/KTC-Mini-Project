// eslint-disable-next-line react/prop-types
const MovieCard = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  const { title, poster_path } = item;
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800 flex flex-col h-full select-none">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="w-full h-[350px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1"></div>
      <h3 className="text-xl font-semibold mb-3 text-center">{title}</h3>
    </div>
  );
};

export default MovieCard;
