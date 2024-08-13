const Price = () => {
  return (
    <div className="w-[500px]">
      <div className="bg-slate-800 p-5 mt-5 rounded-lg min-h-[420px]">
        <h2 className="text-2xl font-medium">Price</h2>
        <div className="flex items-center justify-between mt-7">
          <div className="text-2xl font-medium">2 Ticket</div>
          <div className="flex gap-x-5">
            <span className="text-xl font-medium bg-slate-600 rounded-lg p-2">
              10
            </span>
            <span className="text-xl font-medium bg-slate-600 rounded-lg p-2">
              10
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-7">
          <div className="text-2xl font-medium">Show time : </div>
          <span className="p-2 text-xl">
            1:00 PM - 3:15 PM
          </span>
        </div>
        <div className="border border-solid mt-4"></div>
        <div className="flex items-center justify-between mt-7">
          <div className="text-2xl font-medium">Sub total : </div>
          <span className="text-2xl font-medium">99.99$</span>
        </div>
      </div>
    </div>
  );
};

export default Price;
