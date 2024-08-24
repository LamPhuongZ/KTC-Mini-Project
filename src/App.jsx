import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { AuthProvider } from "./context/auth-context";
import AuthenticationPage from "./pages/LoginPage/AuthenticationPage";
import { ProfilePage } from "./pages/ProfilePage";
import DashboardLayout from "./module/dashboard/DashboardLayout";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import { HistoryPage } from "./pages/HistoryPage";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={<AuthenticationPage></AuthenticationPage>}
          ></Route>
          <Route path="/movies" element={<HomePage></HomePage>}></Route>
          <Route element={<DashboardLayout></DashboardLayout>}>
            <Route
              path="/dashboard"
              element={<DashboardPage></DashboardPage>}
            ></Route>
            <Route
              path="/profile"
              element={<ProfilePage></ProfilePage>}
            ></Route>
            <Route
              path="/history"
              element={<HistoryPage></HistoryPage>}
            ></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
