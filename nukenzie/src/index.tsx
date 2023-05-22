import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { FilteredProvider, HomeProvider } from "./contexts";
import { GlobalStyle } from "./styles/globalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HomeProvider>
      <FilteredProvider>
        <App />
      </FilteredProvider>
    </HomeProvider>
    <GlobalStyle />
    <ToastContainer />
  </React.StrictMode>
);
