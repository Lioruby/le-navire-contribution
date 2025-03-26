import { PiggyBank } from "lucide-react";

export const TotalReceived = ({ totalReceived }: { totalReceived: number }) => {
  return (
    <div className="p-7 rounded-xl shadow-md bg-gray-100 w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-sm md:text-xl font-semibold">TOTAL REÇU</h1>
        <div className="p-3 bg-blue-700 text-blue-100 rounded-full">
          <PiggyBank className="w-7 h-7" />
        </div>
      </div>
      <div className="mt-6">
        <p className="text-7xl font-bold">{totalReceived}€</p>
      </div>
    </div>
  );
};
