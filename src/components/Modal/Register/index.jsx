import { useState } from "react";
import eye from "../../../assets/icons/eye.svg";
import eyeClose from "../../../assets/icons/eyeClose.svg";
import PropTypes from "prop-types";

Register.propTypes = {
  toggleActive: PropTypes.func.isRequired,
};

export function Register({ toggleActive }) {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleGetEmailValue = (e) => {
    setEmailValue(e.target.value);
  };

  const handleGetPasswordValue = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleGetConfirmPasswordValue = (e) => {
    setConfirmPasswordValue(e.target.value);
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <section className="w-1/2 flex flex-col justify-center items-center self-stretch gap-8 bg-white relative">
      <h1 className="text-3xl font-semibold">Create an account</h1>
      <form id="formRegister" className="w-72 flex flex-col">
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
          <button className="absolute top-3 right-2" onClick={handleShowPassword}>
            <img src={showPassword ? eye : eyeClose} alt="icon-eye" />
          </button>
        </div>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            value={confirmPasswordValue}
            onChange={handleGetConfirmPasswordValue}
            className="w-full border rounded p-2 mb-4"
            placeholder="Confirm your password"
            required
          />
          <button className="absolute top-3 right-2" onClick={handleShowConfirmPassword}>
            <img src={showConfirmPassword ? eye : eyeClose} alt="icon-eye" />
          </button>
        </div>
        <button className="bg-pink-500 text-white rounded p-2">
          Create Account
        </button>
        <p className="mt-4">
          Already have an account?{" "}
          <button
            type="button"
            onClick={toggleActive}
            className="text-blue-500 underline"
          >
            Login
          </button>
        </p>
      </form>
    </section>
  );
}
