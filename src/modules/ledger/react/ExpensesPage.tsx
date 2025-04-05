import { PaymentsTable } from "@root/modules/ledger/react/components/PaymentTable";
import { TotalExpenses } from "@root/modules/ledger/react/components/TotalExpenses";
import { TotalReceived } from "@root/modules/ledger/react/components/TotalReceived";
import { TotalRevenue } from "@root/modules/ledger/react/components/TotalRevenue";
import { useExpensesPage } from "./use-expenses-page.hook";
import { ContributorsTable } from "@root/modules/ledger/react/components/ContributorsTable";
import { PirateLoader } from "@root/modules/shared/react/components/ui/PirateLoader";

export const ExpensesPage = () => {
  const { ledger, isLoading } = useExpensesPage();

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <PirateLoader />
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-4 p-5 h-screen md:overflow-hidden bg-white">
      <div className="flex flex-col gap-4">
        <TotalExpenses totalExpenses={ledger?.totalExpenses ?? 0} />
        <TotalReceived totalReceived={ledger?.totalReceived ?? 0} />
        <TotalRevenue totalRevenue={ledger?.totalRevenue ?? 0} />
      </div>

      <div className="w-full h-full">
        <div className="flex items-end">
          <div className="p-2">
            <ContributorsTable
              title="Meilleurs contributeurs du mois"
              contributors={ledger?.monthlyTopContributors.slice(0, 10) ?? []}
              startIndex={0}
            />
          </div>
          <div className="p-2">
            <ContributorsTable
              title=""
              contributors={ledger?.monthlyTopContributors.slice(10, 20) ?? []}
              startIndex={10}
            />
          </div>
        </div>
        <div className="h-5"></div>
        <PaymentsTable
          payments={ledger?.payments ?? []}
          title="DERNIERS DONATEURS"
        />
      </div>
    </div>
  );
};
