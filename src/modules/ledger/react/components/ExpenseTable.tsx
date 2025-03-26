import { LedgerDomainModel } from "../../core/models/ledger.domain-model";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const ExpensesTable = ({
  expenses,
  title,
}: {
  expenses: LedgerDomainModel.Expenses[];
  title: string;
}) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-sm font-semibold text-black">{title}</h1>
        </div>
      </div>
      <div className="mt-2 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="text-left text-xs font-semibold text-black"
                  >
                    Montant
                  </th>
                  <th
                    scope="col"
                    className="text-left text-xs font-semibold text-black"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {expenses.map((expense, index) => (
                  <tr key={expense.date + index}>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-xs font-medium text-black sm:pl-0">
                      {expense.amount}€
                    </td>
                    <td className="whitespace-nowrap px-1 py-2 text-xs text-black">
                      {dayjs(expense.date).format("DD/MM/YYYY HH:mm")}
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
};
