import { useDependencies } from "@root/modules/app/react/DepenciesProvider";
import { useQuery } from "@tanstack/react-query";

export const useGetPaymentsHistory = () => {
  const { ledgerGateway } = useDependencies();

  const { data: paymentsHistory, isLoading } = useQuery({
    queryKey: ["payments-history"],
    queryFn: () => ledgerGateway.getPaymentsHistory(),
  });

  return { paymentsHistory, isLoading };
};
