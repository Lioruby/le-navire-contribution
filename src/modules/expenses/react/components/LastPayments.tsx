import { ChevronDownIcon } from "lucide-react";
import { ExpensesDomainModel } from "../../core/models/expenses.domain-model";

export default function LastPayments({
  payments,
}: {
  payments: ExpensesDomainModel.Payment[];
}) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-black">
            DERNIERS DONATEURS
          </h1>
        </div>
      </div>
      <div className="mt-4 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-0"
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
                    className="px-3 py-3.5 text-left text-sm font-semibold text-black opacity-0"
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
                    className="px-3 py-3.5 text-left text-sm font-semibold text-black"
                  >
                    Montant
                    <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="invisible ml-2 size-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                      />
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-black opacity-0"
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
                    className="px-3 py-3.5 text-left text-sm font-semibold text-black"
                  >
                    Type de paiement
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-500 bg-white">
                {payments.map((payment, index) => (
                  <tr key={payment.email + index}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black sm:pl-0">
                      {payment.name}
                    </td>
                    <td></td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-black">
                      {payment.amount}€
                    </td>
                    <td></td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <div
                        className={`px-2 py-1 w-fit text-xs ${
                          payment.paymentType === "one-time"
                            ? "bg-blue-700"
                            : "bg-green-700"
                        } rounded-md text-white`}
                      >
                        {payment.paymentType === "one-time"
                          ? "Ponctuel"
                          : "Récurrent"}
                      </div>
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
