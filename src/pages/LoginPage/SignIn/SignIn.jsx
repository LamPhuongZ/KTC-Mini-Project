/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { Input } from "../../../components/input";
import { Label } from "../../../components/label";
import Field from "../../../components/field/Field";
import { IconEyeClose, IconEyeOpen } from "../../../components/icon";
import { useEffect, useState } from "react";
import Button from "../../../components/button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/auth-context";
import SignUp from "../SignUp/SignUp";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase-app/firebase-config";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter your password"),
});

const SignIn = ({ toggleActive }) => {
  const userInfo = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Login Page";
    if (userInfo?.email) {
      navigate("/movies");
    }
  }, [userInfo]);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleSignIn = async (values) => {
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, values.email, values.password);
    navigate("/movies");
  };
  useEffect(() => {
    const arrErros = Object.values(errors);
    if (arrErros.length > 0) {
      toast.error(arrErros[0]?.message, {
        pauseOnHover: false,
        delay: 100,
      });
    }
  }, [errors]);
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <section className="w-1/2 flex flex-col justify-center self-stretch gap-8 relative text-white p-3">
      <h1 className="heading uppercase font-bold text-3xl flex justify-center text-primary">
        Sign In
      </h1>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            type={togglePassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            control={control}
          >
            {!togglePassword ? (
              <IconEyeClose onClick={() => setTogglePassword(true)} />
            ) : (
              <IconEyeOpen onClick={() => setTogglePassword(false)} />
            )}
          </Input>
        </Field>
        <div className="have-account mb-10">
          You have not had an account? {" "}
          <button type="button" onClick={toggleActive} className="text-third">
            Sign Out
          </button>
        </div>
        <Button
          type="submit"
          style={{
            maxWidth: 350,
            margin: "0 auto",
            height: 66,
          }}
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Login Now
        </Button>
      </form>
    </section>
  );
};

export default SignIn;
