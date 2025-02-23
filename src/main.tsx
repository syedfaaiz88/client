import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/themes.css";
import "./styles/scrollbar.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { PROJECT_NAME } from "./constants/env.constants.ts";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import ToasterContainer from "./components/Reusable/Toaster.tsx";

document.title = PROJECT_NAME || "Title";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <ToasterContainer />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
