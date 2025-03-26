import { useDependencies } from "@root/modules/app/react/DepenciesProvider";
import { useQuery } from "@tanstack/react-query";

export const useGetExpensesHistory = () => {
  const { ledgerGateway } = useDependencies();

  const { data, isLoading } = useQuery({
    queryKey: ["expenses"],
    queryFn: () => ledgerGateway.getExpensesHistory(),
  });

  return { expenses: data, isLoading };
};
