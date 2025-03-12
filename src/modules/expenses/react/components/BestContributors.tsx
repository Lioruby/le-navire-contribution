import { ChevronDownIcon } from "lucide-react";
import { ExpensesDomainModel } from "../../core/models/expenses.domain-model";
import { ContributorBadge } from "./ContributorBadge";
import { cn } from "@root/modules/shared/react/libs/cn";

export default function BestContributors({
  contributors,
  startIndex = 0,
}: {
  contributors: ExpensesDomainModel.Contributor[];
  startIndex?: number;
}) {
  if (contributors.length === 0) return null;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1
            className={cn(
              "text-md font-semibold text-black",
              startIndex === 0 ? "opacity-100" : "opacity-0"
            )}
          >
            MEILLEURS DONATEURS
          </h1>
        </div>
      </div>
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-1 pl-4 pr-3 text-left text-xs font-semibold text-black sm:pl-0"
                  >
                    <a href="#" className="group inline-flex">
                      Nom
                      <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="size-5"
                        />
                      </span>
                    </a>
                  </th>
                  <th
                    scope="col"
                    className="text-left text-xs font-semibold text-black opacity-0"
                  >
                    Type de paiement
                    <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="invisible ml-2 size-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                      />
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="text-left text-xs font-semibold text-black"
                  >
                    Montant
                    <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="invisible ml-2 size-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                      />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {contributors.map((contributor, index) => (
                  <tr key={contributor.name + index}>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-xs font-medium text-black sm:pl-0">
                      <div className="flex items-center gap-2">
                        <ContributorBadge index={index + startIndex} />
                        <p>{contributor.name}</p>
                      </div>
                    </td>
                    <td></td>
                    <td className="whitespace-nowrap px-1 py-2 text-xs text-black">
                      {contributor.amount}€
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
