import { useForm } from "react-hook-form";
import { Input, InputPassword } from "../../../components/input";
import { Label } from "../../../components/label";
import Field from "../../../components/field/Field";
import { useEffect } from "react";
import Button from "../../../components/button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Navigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/slices/useSlice";

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

  // useDispatch là một hook trong React-Redux, cho phép bạn truy cập vào dispatch function của Redux store từ bên trong các component React. dispatch được sử dụng để gửi một action tới Redux store nhằm thay đổi trạng thái (state) toàn cục của ứng dụng.
  const dispatch = useDispatch();

  // useSelector là một hook trong thư viện React-Redux, được sử dụng để trích xuất dữ liệu từ Redux store trong một component React. Nó cho phép bạn truy cập vào trạng thái (state) được lưu trữ trong Redux mà không cần phải kết nối trực tiếp thông qua connect() như trước đây.
  const { token } = useSelector((state) => {
    return state.userReducer;
  });

  // useSearchParams là một hook trong React Router, cho phép bạn làm việc với các tham số truy vấn (query parameters) trong URL. Khi sử dụng useSearchParams, bạn có thể lấy hoặc cập nhật các tham số truy vấn một cách dễ dàng trong một component React.
  const [searchParams, _] = useSearchParams();

  const onSubmit = (values) => {
    if (!isValid) return;
    dispatch(login(values));
  };

  if (token) {
    const url = searchParams.get("redirectUrl") || "/";
    return <Navigate to={url} />;
  }

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 100,
      });
    }
  }, [errors]);

  return (
    <section className="w-1/2 flex flex-col justify-center self-stretch relative text-white">
      <h1 className="heading uppercase font-bold text-3xl flex justify-center text-primary">
        Sign In
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <InputPassword control={control}></InputPassword>
        </Field>
        <div className="have-account mb-10">
          You have not had an account?{" "}
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
