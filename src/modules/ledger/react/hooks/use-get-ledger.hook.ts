import { useDependencies } from "@root/modules/app/react/DepenciesProvider";
import { QueryKeys } from "@root/modules/shared/react/libs/query-keys";
import { useQuery } from "@tanstack/react-query";

export const useGetLedger = () => {
  const { ledgerGateway } = useDependencies();

  const {
    data: ledger,
    refetch: getLedger,
    isLoading,
  } = useQuery({
    queryKey: [QueryKeys.GET_LEDGER],
    queryFn: () => ledgerGateway.getLedger(),
  });

  return { ledger, getLedger, isLoading };
};
