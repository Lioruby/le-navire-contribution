import { PirateLoader } from "@root/modules/shared/react/components/ui/PirateLoader";
import { useGetExpensesHistory } from "../hooks/use-get-expenses.hook";
import { ExpensesTable } from "../components/ExpenseTable";

export const ExpenseHistoryPage = () => {
  const { expenses, isLoading } = useGetExpensesHistory();

  if (isLoading) {
    return (
      <div className="p-5 h-screen flex items-center justify-center">
        <PirateLoader />
      </div>
    );
  }

  return (
    <div className="p-5">
      <ExpensesTable expenses={expenses ?? []} title="Expenses" />
    </div>
  );
};
