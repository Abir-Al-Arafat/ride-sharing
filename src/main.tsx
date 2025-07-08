import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./index.css";
import { TitleProvider } from "./components/proviers/title";

// Render the App
createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <TitleProvider>
      <RouterProvider router={router} />
    </TitleProvider>
  </StrictMode>
);
