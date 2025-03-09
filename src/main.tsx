import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./modules/global/react/index.css";
import { AppWrapper } from "./modules/app/react/AppWrapper.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./modules/global/react/Home.tsx";
import { ExpensesPage } from "./modules/expenses/react/ExpensesPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expenses" element={<ExpensesPage />} />
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  </StrictMode>
);
