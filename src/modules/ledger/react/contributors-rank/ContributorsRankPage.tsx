import { PirateLoader } from "@root/modules/shared/react/components/ui/PirateLoader";
import { ContributorsTable } from "../components/ContributorsTable";
import { useGetContributorsRank } from "../hooks/use-get-contributors-rank.hook";

export const ContributorsRankPage = () => {
  const { contributorsRank, isLoading } = useGetContributorsRank();

  if (isLoading) {
    return (
      <div className="p-5 h-screen flex items-center justify-center">
        <PirateLoader />
      </div>
    );
  }

  return (
    <div className="p-5">
      <ContributorsTable
        title="Meilleurs donateurs (all time)"
        contributors={contributorsRank ?? []}
      />
    </div>
  );
};
