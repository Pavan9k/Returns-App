import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "../src/store/store.js";
import NotificationProvider from "./components/notificationProvider/NotificationProvider.jsx";

createRoot(document.getElementById("root")).render(
  <NotificationProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </NotificationProvider>
);
