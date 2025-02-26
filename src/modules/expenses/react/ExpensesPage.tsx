import LastPayments from "@root/modules/expenses/react/components/LastPayments";
import { TotalExpenses } from "@root/modules/expenses/react/components/TotalExpenses";
import { TotalReceived } from "@root/modules/expenses/react/components/TotalReceived";
import { TotalRevenue } from "@root/modules/expenses/react/components/TotalRevenue";
import { useExpensesPage } from "./use-expenses-page.hook";

export const ExpensesPage = () => {
  const { expenses } = useExpensesPage();

  return (
    <div className="flex flex-col gap-4 p-20 h-screen overflow-hidden bg-white">
      <div className="flex gap-10 flex-wrap">
        <TotalRevenue totalRevenue={expenses?.totalRevenue ?? 0} />
        <TotalExpenses totalExpenses={expenses?.totalExpenses ?? 0} />
        <TotalReceived totalReceived={expenses?.totalReceived ?? 0} />
      </div>

      <div className=" mt-16">
        <LastPayments payments={expenses?.payments ?? []} />
      </div>
    </div>
  );
};
