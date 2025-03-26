import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./modules/global/react/index.css";
import { AppWrapper } from "./modules/app/react/AppWrapper.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./modules/global/react/Home.tsx";
import { ExpensesPage } from "./modules/ledger/react/ExpensesPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ContributorsRankPage } from "./modules/ledger/react/contributors-rank/ContributorsRankPage.tsx";
import { PaymentHistory } from "./modules/ledger/react/payment-history/PaymentHistory.tsx";
import { ExpenseHistoryPage } from "./modules/ledger/react/expenses/ExpenseHistoryPage.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expenses" element={<ExpensesPage />} />
            <Route
              path="/contributors-rank"
              element={<ContributorsRankPage />}
            />
            <Route path="/payment-history" element={<PaymentHistory />} />
            <Route path="/expense-history" element={<ExpenseHistoryPage />} />
          </Routes>
        </BrowserRouter>
      </AppWrapper>
    </QueryClientProvider>
  </StrictMode>
);
