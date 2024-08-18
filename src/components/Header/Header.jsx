
const Header = () => {
    return (
        <header className="header flex items-center justify-between mb-7">
        <div className="uppercase font-extrabold text-4xl text-transparent bg-clip-text bg-primary-gradient ">
          watch ..?
        </div>
        <div className="flex gap-x-5">
          <button className="rounded-md bg-pink-500 px-4 py-2">Login</button>
          <button className="rounded-md px-4 py-2">Register</button>
        </div>
      </header>
    );
};

export default Header;