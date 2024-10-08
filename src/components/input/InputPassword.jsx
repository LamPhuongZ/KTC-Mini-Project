import React, { useState } from "react";
import { IconEyeClose, IconEyeOpen } from "../icon";
import Input from "./Input";

const InputPassword = ({ control, name }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  if (!control) return null;
  return (
    <>
      <Input
        type={togglePassword ? "text" : "password"}
        name={name}
        placeholder="Enter your password"
        control={control}
      >
        {!togglePassword ? (
          <IconEyeClose onClick={() => setTogglePassword(true)} />
        ) : (
          <IconEyeOpen onClick={() => setTogglePassword(false)} />
        )}
      </Input>
    </>
  );
};

export default InputPassword;
