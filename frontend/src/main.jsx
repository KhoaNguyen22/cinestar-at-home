import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { MovieDetailPage } from "./pages/MovieDetailPage.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/m" element={<MovieDetailPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
