import { HandCoins } from "lucide-react";

export const TotalExpenses = ({ totalExpenses }: { totalExpenses: number }) => {
  return (
    <div className="p-10 rounded-xl shadow-md bg-gray-100 w-full md:w-fit">
      <div className="flex items-center justify-between">
        <h1 className="text-sm md:text-xl font-semibold">DÉPENSES TOTALES</h1>
        <div className="p-3 bg-blue-700 text-blue-100 rounded-full">
          <HandCoins className="w-7 h-7" />
        </div>
      </div>
      <div className="mt-6">
        <p className="text-6xl md:text-9xl font-bold">{totalExpenses}€</p>
      </div>
    </div>
  );
};
