import { PiggyBank } from "lucide-react";

export const TotalReceived = ({ totalReceived }: { totalReceived: number }) => {
  return (
    <div className="p-10 rounded-xl shadow-md bg-gray-50">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">TOTAL REÇU</h1>
        <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
          <PiggyBank className="w-7 h-7" />
        </div>
      </div>
      <div className="mt-6">
        <p className="text-7xl font-bold">{totalReceived}€</p>
      </div>
    </div>
  );
};
