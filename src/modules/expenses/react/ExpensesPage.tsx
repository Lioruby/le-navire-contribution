import LastPayments from "@root/modules/expenses/react/components/LastPayments";
import { TotalExpenses } from "@root/modules/expenses/react/components/TotalExpenses";
import { TotalReceived } from "@root/modules/expenses/react/components/TotalReceived";
import { TotalRevenue } from "@root/modules/expenses/react/components/TotalRevenue";
import { useExpensesPage } from "./use-expenses-page.hook";
import BestContributors from "./components/BestContributors";

export const ExpensesPage = () => {
  const { expenses } = useExpensesPage();

  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-4 p-5 h-screen md:overflow-hidden bg-white">
      <div className="flex flex-col gap-4">
        <TotalExpenses totalExpenses={expenses?.totalExpenses ?? 0} />
        <TotalReceived totalReceived={expenses?.totalReceived ?? 0} />
        <TotalRevenue totalRevenue={expenses?.totalRevenue ?? 0} />
      </div>

      <div className="w-full">
        <div className="flex items-start">
          <BestContributors
            title="Meilleurs donateurs (all time)"
            contributors={expenses?.allTimeTopContributors ?? []}
          />
          <BestContributors
            title="Meilleurs donateurs (du mois)"
            contributors={expenses?.monthlyTopContributors ?? []}
          />
        </div>
        <div className="h-5"></div>
        <LastPayments payments={expenses?.payments ?? []} />
      </div>
    </div>
  );
};
