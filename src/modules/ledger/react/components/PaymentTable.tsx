import { LedgerDomainModel } from "../../core/models/ledger.domain-model";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const PaymentsTable = ({
  payments,
  title,
}: {
  payments: LedgerDomainModel.Payment[];
  title: string;
}) => {
  const firstPayment = payments[0];

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
                    className="py-1 pl-4 pr-3 text-left text-xs font-semibold text-black sm:pl-0"
                  >
                    Nom
                  </th>
                  <th
                    scope="col"
                    className="text-left text-xs font-semibold text-black opacity-0"
                  >
                    Type de paiement
                  </th>
                  <th
                    scope="col"
                    className="text-left text-xs font-semibold text-black"
                  >
                    Montant
                  </th>
                  <th
                    scope="col"
                    className="text-left text-xs font-semibold text-black opacity-0"
                  >
                    Type de paiement
                  </th>
                  <th
                    scope="col"
                    className="text-left text-xs font-semibold text-black"
                  >
                    Type de paiement
                  </th>
                  {firstPayment?.date && (
                    <th
                      scope="col"
                      className="text-left text-xs font-semibold text-black"
                    >
                      Date
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {payments.map((payment, index) => (
                  <tr key={payment.email + index}>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-xs font-medium text-black sm:pl-0">
                      {payment.name}
                    </td>
                    <td></td>
                    <td className="whitespace-nowrap px-1 py-2 text-xs text-black">
                      {payment.amount}€
                    </td>
                    <td></td>
                    <td className="whitespace-nowrap px-1 py-2 text-xs">
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
                    {firstPayment?.date && (
                      <td className="whitespace-nowrap px-1 py-2 text-xs">
                        {dayjs(payment.date)
                          .tz("Europe/Paris")
                          .format("DD/MM/YYYY HH:mm")}
                      </td>
                    )}
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
