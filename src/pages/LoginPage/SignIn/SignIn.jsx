import { useForm } from "react-hook-form";
import { Input } from "../../../components/input";
import { Label } from "../../../components/label";
import Field from "../../../components/field/Field";
import { IconEyeClose, IconEyeOpen } from "../../../components/icon";
import { useState } from "react";

const SignIn = () => {
  const { control } = useForm({});
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <section className="w-1/2 flex flex-col justify-center self-stretch gap-8 relative text-white p-3">
      <h1 className="heading uppercase font-bold text-3xl ">Sign In</h1>
      <form>
        <Field>
          <Label htmlFor="fullname">Fullname</Label>
          <Input
            type="text"
            name="fullname"
            placeholder="Enter your fullname"
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
              <IconEyeClose
                onClick={() => setTogglePassword(true)}
              />
            ) : (
              <IconEyeOpen
                onClick={() => setTogglePassword(false)}
              />
            )}
          </Input>
        </Field>
      </form>
    </section>
  );
};

export default SignIn;
