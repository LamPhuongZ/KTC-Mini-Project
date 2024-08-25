import { useState } from "react";
import * as Yup from "yup";
import eye from "../../../assets/icons/eye.svg";
import eyeClose from "../../../assets/icons/eyeClose.svg";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { regexPassword } from "../../../utils";
import { registerUser } from "../../../redux/services/registerAPI";
import { toast } from "react-toastify";

Register.propTypes = {
  toggleActive: PropTypes.func.isRequired,
};

export function Register({ toggleActive }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full name is required"),
      phoneNumber: Yup.string()
        .max(10, "Phone number must have 10 digits")
        .required("Phone number is required"),
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
    onSubmit: async (values) => {
      await registerUser({
        name: values.name,
        phoneNumber: values.phoneNumber,
        email: values.email,
        password: values.password,
      });

      toast.success("Registration successful");
    },
  });

  return (
    <section className="w-1/2 flex flex-col justify-center items-center self-stretch gap-8 bg-white relative text-custom-primary overflow-hidden">
      <h1 className="text-3xl font-bold">Create an account</h1>
      <form
        id="formRegister"
        className="w-80 h-4/5 flex flex-col gap-2 overflow-auto"
        onSubmit={formik.handleSubmit}
      >
        <label htmlFor="name" className="text-left">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          {...formik.getFieldProps("name")}
          className="border rounded p-2 mb-3 bg-white"
          placeholder="Enter your name"
          required
        />
        {formik.touched.name && formik.errors.name ? (
          <p className="text-red-500 mb-4">Full name cannot be empty</p>
        ) : (
          ""
        )}

        <label htmlFor="phone" className="text-left">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          {...formik.getFieldProps("phoneNumber")}
          className="border rounded p-2 mb-3 bg-white"
          placeholder="Enter your phone"
          required
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <p className="text-red-500 mb-4">Phone number must have 10 digits</p>
        ) : (
          ""
        )}

        <label htmlFor="email" className="text-left">
          Email
        </label>
        <input
          type="text"
          id="email"
          {...formik.getFieldProps("email")}
          className="border rounded p-2 mb-3 bg-white"
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
            className="w-full border rounded p-2 bg-white"
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
            className="w-full border rounded p-2 bg-white"
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
          type="submit"
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
