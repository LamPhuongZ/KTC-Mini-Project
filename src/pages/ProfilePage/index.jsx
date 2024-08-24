import { useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import Field from "../../components/field/Field";
import { Input, InputPassword } from "../../components/input";
import { Label } from "../../components/label";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebase-app/firebase-config";
import { useEffect } from "react";
import { useAuth } from "../../context/auth-context";
import { useSearchParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  birthday: yup
    .string()
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/,
      "Date of Birth must be in the format dd/mm/yyyy"
    )
    .required("Date of Birth is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter your password"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

export function ProfilePage() {
  useEffect(() => {
    document.title = "My Profile";
  }, []);

  // const [datas, setDatas] = useState([]);

  // const { data } = useSWR(
  //   "https://absolute-pangolin-key.ngrok-free.app/api/user",
  //   fetcher
  // );

  // useEffect(() => {
  //   if (data && data.results) setDatas(data.results);
  // }, [data]);

  // const { userInfo, setUserInfo } = useAuth();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [params] = useSearchParams();
  const userId = params.get("id");
  const handleUpdateUser = async (values) => {
    if (!isValid) return null;
    try {
      const colRef = doc(db, "users", userId);
      await updateDoc(colRef, {
        ...values,
      });
      toast.success("Updated user information successfully!");
    } catch (error) {
      toast.error("Update user information failed!");
    }
  };

  // render ra thông tin của user đó đăng ký
  useEffect(() => {
    async function fetchData() {
      if (!userId) return;
      const colRef = doc(db, "users", userId);
      const docData = await getDoc(colRef);
      // có reset thì mới hiển thị dc data của user đó
      reset(docData && docData.data());
    }
    fetchData();
  }, [userId, reset]);

  if (!userId) return null;

  // const handleSignOut = () => {
  //   signOut(auth);
  // };

  useEffect(() => {
    const arrErros = Object.values(errors);
    console.log("🚀 ~ useEffect ~ arrErros:", arrErros);
    if (arrErros.length > 0) {
      toast.error(arrErros[0]?.message, {
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
      {/* <div className="flex justify-between">
        <Button
          type="button"
          style={{
            maxWidth: 100,
            height: 66,
          }}
          // onClick={handleSignOut}
          to="/"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </span>
        </Button>
      </div> */}
      <form onSubmit={handleSubmit(handleUpdateUser)}>
        <div className="form-layout pt-10">
          <Field>
            <Label htmlFor="fullname">Full Name</Label>
            <Input
              control={control}
              name="fullname"
              placeholder="Enter your fullname"
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="phone">Mobile Number</Label>
            <Input
              control={control}
              name="phone"
              placeholder="Enter your phone number"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label htmlFor="birthday">Date of Birth</Label>
            <Input
              control={control}
              name="birthday"
              placeholder="dd/mm/yyyy"
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input
              control={control}
              name="email"
              type="email"
              placeholder="Enter your email address"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label htmlFor="password">New Password</Label>
            <InputPassword
              name="password"
              placeholder="Enter your password"
              control={control}
              type="password"
            ></InputPassword>
          </Field>
          <Field>
            <Label htmlFor="passwordConfirm">Confirm Password</Label>
            <InputPassword
              name="passwordConfirm"
              placeholder="Enter your password"
              control={control}
              type="password"
            ></InputPassword>
          </Field>
        </div>
        <div className="form-layout">
          <Button
            to={"/movies"}
            type="button"
            className="btn cursor-pointer p-[25px] py-0 leading-none border-none bg-third rounded-lg font-semibold text-xl w-full disabled:opacity-0 disabled:pointer-events-none flex justify-center items-center hover:bg-third hover:border-none text-white"
            style={{
              maxWidth: 350,
              margin: "0 auto",
              height: 66,
            }}
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Back
          </Button>
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
            Update infomation
          </Button>
        </div>
      </form>
    </section>
  );
}
