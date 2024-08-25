const MovieCard = ({ item, onSelect: handleSelect }) => {
  const { name, imageUrl, rating } = item;

  return (
    <div className="movie-card rounded-lg p-2 bg-slate-800 flex flex-col h-full select-none relative group">
      <div className="relative overflow-hidden rounded-lg mb-5">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-[400px] object-cover"
        />
        <button
          className="btn absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-[rgba(20,15,15,0.68)] text-white py-2 px-4 rounded-md opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[rgba(20,15,15,0.68)] border border-none w-[250px] mb-2 mx-auto text-xl"
          onClick={() => handleSelect(item)}
        >
          Detail
        </button>
      </div>
      <h3 className="text-xl font-semibold text-center">{name}</h3>
      <span className="absolute right-5 rounded-lg top-4 bg-gradient-to-t from-[rgba(71,71,71,0.5)] to-[rgba(0,0,0,0.5)] p-1">
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
          <span>{rating}</span>
        </div>
      </span>
    </div>
  );
};

export default MovieCard;
