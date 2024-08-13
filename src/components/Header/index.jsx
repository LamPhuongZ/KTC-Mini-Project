import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  
  const handelLogin = () => {
    navigate("/login")
  }


  return (
    <>
      <button onClick={handelLogin()}>Login</button>
    </>
  );
}
