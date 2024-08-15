import { useState } from "react";
import * as Yup from "yup";
import eye from "../../../assets/icons/eye.svg";
import eyeClose from "../../../assets/icons/eyeClose.svg";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { regexPassword } from "../../../utils";

Register.propTypes = {
  toggleActive: PropTypes.func.isRequired,
};

export function Register({ toggleActive }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(
          regexPassword,
          "Password must contain one uppercase, one lowercase, one number, and one special character"
        )
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });

  return (
    <section className="w-1/2 flex flex-col justify-center items-center self-stretch gap-8 bg-white relative">
      <h1 className="text-3xl font-bold">Create an account</h1>
      <form id="formRegister" className="w-80 flex flex-col gap-2">
        <label htmlFor="email" className="text-left">
          Email
        </label>
        <input
          type="text"
          id="email"
          {...formik.getFieldProps("email")}
          className="border rounded p-2 mb-3"
          placeholder="Enter your email"
          required
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="text-red-500 mb-4">Email in correct format</p>
        ) : (
          ""
        )}

        <label htmlFor="password" className="text-left">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            {...formik.getFieldProps("password")}
            className="w-full border rounded p-2"
            placeholder="Enter your password"
            required
          />
          <button
            className="absolute top-2.5 right-2"
            onClick={(e) => {
              e.preventDefault();
              setShowPassword(!showPassword);
            }}
          >
            <img src={showPassword ? eye : eyeClose} alt="icon-eye" />
          </button>

          {formik.touched.password && formik.errors.password ? (
            <p className="text-red-500 mb-4">
              Password must contain at least 1 uppercase letter, 1 lowercase
              letter, 1 special character, 1 number
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            {...formik.getFieldProps("confirmPassword")}
            className="w-full border rounded p-2"
            placeholder="Confirm your password"
            required
          />
          <button
            className="absolute top-2.5 right-2"
            onClick={(e) => {
              e.preventDefault();
              setShowConfirmPassword(!showConfirmPassword);
            }}
          >
            <img src={showConfirmPassword ? eye : eyeClose} alt="icon-eye" />
          </button>
        </div>
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <p className="text-red-500 mb-4">Passwords do not match</p>
        ) : (
          ""
        )}
        <button
          className="bg-pink-500 text-white rounded p-2"
          disabled={!formik.isValid || !formik.dirty}
        >
          Create Account
        </button>
        <p className="mt-4 text-center">
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
