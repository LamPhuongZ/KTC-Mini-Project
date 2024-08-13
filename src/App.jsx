import "./App.css";
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";
import ListDay from "./components/day/ListDay";
import MovieTitle from "./components/movie/MovieTitle";

function App() {
  return (
    <>
      <header className="header flex items-center justify-between mb-7">
        <div className="uppercase font-extrabold text-4xl text-transparent bg-clip-text bg-primary-gradient ">
          watch ..?
        </div>
        <div className="flex gap-x-5">
          <button className="rounded-md bg-pink-500 px-4 py-2">Login</button>
          <button className="rounded-md px-4 py-2">Register</button>
        </div>
      </header>
      <Banner></Banner>
      <main>
        <ListDay></ListDay>
        <MovieTitle></MovieTitle>
        <MovieList></MovieList>

        <div className="flex gap-x-4">
          <div className="w-[350px]">
            <section>
              <div className="bg-slate-800 p-5 mt-5 rounded-lg">
                <h2 className="font-medium text-3xl mb-2">
                  Deadpool & Wolverine
                </h2>
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
            <section>
              <div className="bg-slate-800 p-5 py-7 mt-5 rounded-lg">
                <h2 className="text-lg font-medium">Select showtime</h2>
                <div className="flex gap-x-2 mt-5">
                  <span className="inline-block p-2 rounded-full bg-slate-600 text-sm">
                    1:00 PM - 3:15 PM
                  </span>
                  <span className="inline-block p-2 rounded-full bg-slate-600 text-sm">
                    3:00 PM - 5:15 PM
                  </span>
                </div>
              </div>
            </section>
          </div>
          <div className="bg-slate-800 p-7 mt-5 w-[700px] rounded-lg">
            <h2 className="font-medium text-xl mb-2 text-white">Select seat</h2>
            <div className="grid grid-cols-5 gap-2 ">
              {Array.from({ length: 30 }).map((_, index) => (
                <div
                  key={index}
                  className="w-24 h-7 bg-slate-500 rounded-md flex items-center justify-center text-white cursor-pointer hover:bg-third hover:border-none hover:font-bold"
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 p-7 mt-5 w-[350px] rounded-lg"></div>
        </div>
      </main>
    </>
  );
}

export default App;
