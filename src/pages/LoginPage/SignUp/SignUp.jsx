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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../../firebase-app/firebase-config";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

const schema = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  phone: yup
    .string()
    .max(10, "Phone number must have 10 digits")
    .required("Phone number is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter your password"),
});
const SignUp = () => {
  const navigate = useNavigate()
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

  const handleSignUp = async (values) => {
    if (!isValid) return;
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    });

    const colRef = collection(db, "users");
    await addDoc(colRef, {
      fullname: values.fullname,
      phone: values.phone,
      email: values.email,
      password: values.password,
    });

    toast.success("Create account successfully !!!");
    navigate("/movies")
  };
  useEffect(() => {
    const arrErros1 = Object.values(errors);
    if (arrErros1.length > 0) {
      toast.error(arrErros1[0]?.message, {
        pauseOnHover: false,
        delay: 100,
      });
    }
  }, [errors]);
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <section className="w-1/2 flex flex-col justify-center self-stretch gap-8 relative text-white p-3">
      <h1 className="heading uppercase font-bold text-3xl flex justify-center text-primary">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <Field>
          <Label htmlFor="fullname">Full name</Label>
          <Input
            type="name"
            name="fullname"
            placeholder="Enter your fullname"
            control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="phone">Phone</Label>
          <Input
            type="number"
            name="phone"
            placeholder="Enter your phone"
            control={control}
          />
        </Field>
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
          Create account
        </Button>
      </form>
    </section>
  );
};

export default SignUp;
