const DetailDisplay = () => {
  return (
    <section>
      <div className="bg-slate-800 p-5 mt-5 rounded-lg min-h-[150px]">
        <h2 className="font-medium text-3xl mb-2">Deadpool & Wolverine</h2>
        <div className="flex gap-x-2 mt-5">
          <span className="inline-block p-2 rounded-full bg-slate-600 text-sm">
            Action
          </span>
          <span className="inline-block p-2 rounded-full bg-slate-600 text-sm">
            Fun
          </span>
        </div>
      </div>
    </section>
  );
};

export default DetailDisplay;
