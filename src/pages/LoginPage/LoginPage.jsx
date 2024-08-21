import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

const LoginPage = () => {
  return (
    <div className="bg-slate-900 font-body p-5 text-white min-h-[100vh] flex items-center justify-center">
      <div className="w-8/12 h-5/6 bg-slate-300 flex flex-row items-center justify-center">
        <div className="flex justify-between w-full h-full">
          <SignIn></SignIn>
          <SignUp></SignUp>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
