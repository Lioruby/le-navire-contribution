import { PirateLoader } from "@root/modules/shared/react/components/ui/PirateLoader";

import { useGetPaymentsHistory } from "../hooks/use-get-payments-history.hook";
import { PaymentsTable } from "../components/PaymentTable";

export const PaymentHistory = () => {
  const { paymentsHistory, isLoading } = useGetPaymentsHistory();

  if (isLoading) {
    return (
      <div className="p-5 h-screen flex items-center justify-center">
        <PirateLoader />
      </div>
    );
  }

  return (
    <div className="p-5">
      <PaymentsTable
        payments={paymentsHistory ?? []}
        title="HISTORIQUE DES PAIEMENTS"
      />
    </div>
  );
};
