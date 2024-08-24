import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { AuthProvider } from "./context/auth-context";
import AuthenticationPage from "./pages/LoginPage/AuthenticationPage";
import { ProfilePage } from "./pages/ProfilePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthenticationPage />}></Route>
          <Route path="/movies" element={<HomePage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
