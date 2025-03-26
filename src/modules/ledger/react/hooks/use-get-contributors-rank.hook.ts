import { useDependencies } from "@root/modules/app/react/DepenciesProvider";
import { QueryKeys } from "@root/modules/shared/react/libs/query-keys";
import { useQuery } from "@tanstack/react-query";

export const useGetContributorsRank = () => {
  const { ledgerGateway } = useDependencies();

  const { data: contributorsRank, isLoading } = useQuery({
    queryKey: [QueryKeys.GET_CONTRIBUTORS_RANK],
    queryFn: () => ledgerGateway.getContributorsRank(),
  });

  return { contributorsRank, isLoading };
};
