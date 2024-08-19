import screen from "../../assets/screen.png";

const Seat = () => {
  return (
    <div className="bg-slate-800 p-3 mt-5 min-w-[700px] rounded-lg flex-grow">
      <h2 className="font-medium text-xl text-white">Select seat</h2>
      <div className="flex justify-center ">
        <img src={screen} alt="" className="mb-7 object-cover w-[400px]" />
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-5 gap-3 gap-x-7">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className="w-16 h-6 bg-slate-500 rounded-md flex items-center justify-center text-white cursor-pointer hover:bg-third hover:border-none hover:font-bold"
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seat;
