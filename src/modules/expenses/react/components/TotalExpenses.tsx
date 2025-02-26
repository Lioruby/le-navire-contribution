import { HandCoins } from "lucide-react";

export const TotalExpenses = ({ totalExpenses }: { totalExpenses: number }) => {
  return (
    <div className="p-10 rounded-xl shadow-md bg-gray-50">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">DÉPENSES TOTALES</h1>
        <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
          <HandCoins className="w-7 h-7" />
        </div>
      </div>
      <div className="mt-6">
        <p className="text-9xl font-bold">{totalExpenses}€</p>
      </div>
    </div>
  );
};
