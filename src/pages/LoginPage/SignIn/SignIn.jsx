const SignIn = () => {
  return (
    <section className="w-1/2 flex flex-col justify-center items-center self-stretch gap-8 bg-white relative text-custom-primary">
      <h1 className="heading uppercase font-bold text-3xl">Sign In</h1>
      <form>
        <div className="field flex">
          <label htmlFor="fullname" className="label">
            Fullname
          </label>
          <input
            type="text"
            className="input"
            placeholder="Enter your fullname"
          />
        </div>
      </form>
    </section>
  );
};

export default SignIn;
