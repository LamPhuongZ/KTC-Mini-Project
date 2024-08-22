import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

const LoginPage = () => {
  return (
    <div className="text-white h-[100vh] flex items-center justify-center ">
      <div className="w-2/4 bg-slate-800 flex flex-row items-center justify-center">
        <div className="flex justify-between w-full h-full">
          <SignIn></SignIn>
          <SignUp></SignUp>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
