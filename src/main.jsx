import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import store, { persistor } from "./redux/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    <ToastContainer position="top-center" theme="light" />
  </Provider>
);
