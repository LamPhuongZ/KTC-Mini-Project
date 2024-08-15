import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { regexPassword } from "../../utils";
import eye from "../../assets/icons/eye.svg";
import eyeClose from "../../assets/icons/eyeClose.svg";
import { fetcher } from "../../config";
import useSWR from "swr";

export function Profile() {
  const [showPassword, setShowPassword] = useState(false);
  const [datas, setDatas] = useState([]);

  const { data } = useSWR(
    "https://absolute-pangolin-key.ngrok-free.app/api/user",
    fetcher
  );

  useEffect(() => {
    if (data && data.results) setDatas(data.results);
  }, [data]);
  console.log("🚀 ~ UserList ~ data:", data);


  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      phone: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
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
      phone: Yup.number().max(10, "Incorrect phone number"),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Personal Information</h1>
      <form id="formLogin" className="w-80 flex flex-col gap-2">
        <label htmlFor="fullName" className="text-left" disabled={true}>
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          {...formik.getFieldProps("email")}
          className="border rounded p-2 mb-3"
          placeholder="Enter your full name"
          required
        />
        {formik.touched.fullName ? (
          <p className="text-red-500 mb-4">Full name can not be blank</p>
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
          className="border rounded p-2 mb-3"
          placeholder="Enter your email"
          disabled={true}
        />
        
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
            <p className="text-red-500 mb-4">Password do not match</p>
          ) : (
            ""
          )}
        </div>
        <label htmlFor="phone" className="text-left">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          {...formik.getFieldProps("phone")}
          className="border rounded p-2 mb-3"
          placeholder="Enter your phone"
          required
        />
        {formik.touched.phone && formik.errors.phone ? (
          <p className="text-red-500 mb-4">Phone in correct format</p>
        ) : (
          ""
        )}
        <button
          className="bg-pink-500 text-white rounded p-2"
          disabled={!formik.isValid || !formik.dirty}
        >
          Update now
        </button>
      </form>
    </section>
  );
}
