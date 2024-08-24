import { useForm } from "react-hook-form";
import { Input, InputPassword } from "../../../components/input";
import { Label } from "../../../components/label";
import Field from "../../../components/field/Field";
import { useEffect } from "react";
import Button from "../../../components/button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../redux/services/registerAPI";

const schema = yup.object({
  name: yup.string().required("Please enter your fullName"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  phoneNumber: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter your password"),
});
const SignUp = ({ toggleActive }) => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleSignUp = async (values) => {
    if (!isValid) return;
    await registerUser({
      name: values.name,
      email: values.email,
      password: values.password,
      phoneNumber: values.phoneNumber,
    });

    toast.success("Create account successfully !!!");
    navigate("/movies");
  };

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 50,
      });
    }
  }, [errors]);

  return (
    <section className="w-1/2 flex flex-col justify-center self-stretch relative text-white">
      <h1 className="heading uppercase font-bold text-3xl flex justify-center text-primary">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <Field>
          <Label htmlFor="name">Full name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Enter your fullName"
            control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="phoneNumber">Phone</Label>
          <Input
            type="text"
            name="phoneNumber"
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
          <InputPassword control={control} name="password"></InputPassword>
        </Field>
        <div className="have-account mb-10">
          You already have an account?{" "}
          <button type="button" onClick={toggleActive} className="text-third">
            Sign In
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
          Create account
        </Button>
      </form>
    </section>
  );
};

export default SignUp;
