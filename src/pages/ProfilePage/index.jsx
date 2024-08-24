import { useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import Field from "../../components/field/Field";
import { Input, InputPassword } from "../../components/input";
import { Label } from "../../components/label";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-app/firebase-config";
import { useEffect } from "react";

export function ProfilePage() {
  // const [datas, setDatas] = useState([]);

  // const { data } = useSWR(
  //   "https://absolute-pangolin-key.ngrok-free.app/api/user",
  //   fetcher
  // );

  // useEffect(() => {
  //   if (data && data.results) setDatas(data.results);
  // }, [data]);

  useEffect(()=>{
    document.title = "My Profile"
  },[])  
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
  });

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center text-white">
      <div className="flex justify-between">
        <h1 className="heading uppercase font-bold text-5xl flex justify-center text-primary">
          My Profile
        </h1>
        <Button
          type="button"
          style={{
            maxWidth: 100,
            height: 66,
          }}
          onClick={handleSignOut}
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
      </div>
      <form onSubmit={handleSubmit()}>
        <div className="form-layout pt-10">
          <Field>
            <Label htmlFor="fullname">Fullname</Label>
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
            <Label>Confirm Password</Label>
            <InputPassword
              name="password"
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
            Update
          </Button>
        </div>
      </form>
    </section>
  );
}
