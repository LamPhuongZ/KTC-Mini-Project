import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import store, { persistor } from "./redux/store.js";
import { AuthProvider } from "./context/auth-context.jsx";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
      <ToastContainer position="top-center" theme="light" />
    </Provider>
  </AuthProvider>
);
