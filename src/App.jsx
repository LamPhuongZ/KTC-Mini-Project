import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { AuthProvider } from "./context/auth-context";
import AuthenticationPage from "./pages/LoginPage/AuthenticationPage";
import { ProfilePage } from "./pages/ProfilePage";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route
            path="/login"
            element={<AuthenticationPage></AuthenticationPage>}
          ></Route>
          <Route path="/movies" element={<HomePage></HomePage>}></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
