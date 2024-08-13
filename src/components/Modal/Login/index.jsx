import eye from "../../../assets/icons/eye.svg";
import eyeClose from "../../../assets/icons/eyeClose.svg";
import { useState } from "react";
import PropTypes from "prop-types";

Login.propTypes = {
  toggleActive: PropTypes.func.isRequired,
};

export function Login({ toggleActive }) {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleGetEmailValue = (e) => {
    setEmailValue(e.target.value);
  };

  const handleGetPasswordValue = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleCShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <section className="w-1/2 flex flex-col justify-center items-center self-stretch gap-8 bg-white relative">
      <h1 className="text-3xl font-semibold">Login to your account</h1>
      <form id="formLogin" className="w-72 flex flex-col">
        <label htmlFor="email" className="text-left">
          Email
        </label>
        <input
          type="text"
          id="email"
          value={emailValue}
          onChange={handleGetEmailValue}
          className="border rounded p-2 mb-4"
          placeholder="Enter your email"
          required
        />
        <label htmlFor="password" className="text-left">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={passwordValue}
            onChange={handleGetPasswordValue}
            className="w-full border rounded p-2 mb-4"
            placeholder="Enter your password"
            required
          />
          <button
            className="absolute top-3 right-2"
            onClick={handleCShowPassword}
          >
            <img src={showPassword ? eye : eyeClose} alt="icon-eye" />
          </button>
        </div>
        <button className="bg-pink-500 text-white rounded p-2">
          Login Now
        </button>
        <p className="mt-4">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={toggleActive}
            className="text-blue-500 underline"
          >
            Register Here
          </button>
        </p>
      </form>
    </section>
  );
}
