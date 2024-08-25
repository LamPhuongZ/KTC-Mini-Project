import { useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import Field from "../../components/field/Field";
import { Input, InputPassword } from "../../components/input";
import { Label } from "../../components/label";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePassword, getUserByIdAPI } from "../../redux/services/userAPI";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/slices/useSlice";

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
  currentPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter your password"),
  newPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter your password"),
});

export function ProfilePage() {
  const [params] = useSearchParams();
  const userId = params.get("id");

  const dispatch = useDispatch();
  const navigator = useNavigate();
  const handleSignOut = () => {
    dispatch(logOut());
    navigator("/movies");
  };

  useEffect(() => {
    document.title = "My Profile";
  }, []);

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      currentPassword: "",
      newPassword: "",
    },
  });

  const fetchUserById = async (userId) => {
    try {
      const response = await getUserByIdAPI(userId);
      setValue("name", response.name);
      setValue("email", response.email);
      setValue("phoneNumber", response.phoneNumber);

      toast.success("Information is being updated");
    } catch (error) {
      toast.error("Get user information failed!");
      throw error;
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserById(userId);
    }
  }, [userId]);

  const handleUpdateUser = async (values) => {
    if (!isValid) return null;

    const payload = {
      ...values,
      currentPassword: values.currentPassword,
      newPassword: values.newPassword,
    };

    try {
      const response = await changePassword(payload);

      toast.success("Update Password Successfully ...!");
      handleSignOut();
    } catch (error) {
      toast.error("Update user information failed!");
      throw error;
    }
  };

  if (!userId) return null;

  useEffect(() => {
    const arrErrors = Object.values(errors);
    console.log("🚀 ~ useEffect ~ arrErros:", arrErrors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 100,
      });
    }
  }, [errors]);

  return (
    <section className="min-h-screen flex flex-col text-white">
      <h1 className="heading uppercase font-semibold text-5xl flex justify-center text-primary">
        My Profile
      </h1>
      <form onSubmit={handleSubmit(handleUpdateUser)}>
        <div className="form-layout pt-10">
          <Field>
            <Label htmlFor="name">Full Name</Label>
            <Input
              control={control}
              name="name"
              placeholder="Enter your fullName"
              disabled
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="phoneNumber">Mobile Number</Label>
            <Input
              control={control}
              name="phoneNumber"
              placeholder="Enter your phone number"
              disabled
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input
              control={control}
              name="email"
              type="email"
              placeholder="Enter your email address"
              disabled
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label htmlFor="currentPassword">New Password</Label>
            <InputPassword
              name="currentPassword"
              placeholder="Enter your password"
              control={control}
              type="password"
            ></InputPassword>
          </Field>
          <Field>
            <Label htmlFor="newPassword">Confirm Password</Label>
            <InputPassword
              name="newPassword"
              placeholder="Enter your password"
              control={control}
              type="password"
            ></InputPassword>
          </Field>
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
          Update information
        </Button>
      </form>
    </section>
  );
}
