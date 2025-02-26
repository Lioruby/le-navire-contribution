import { Wallet } from "lucide-react";

export const TotalRevenue = ({ totalRevenue }: { totalRevenue: number }) => {
  return (
    <div className="p-10 rounded-xl shadow-md bg-gray-50">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">REVENUE TOTAL</h1>
        <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
          <Wallet className="w-7 h-7" />
        </div>
      </div>
      <div className="mt-6">
        <p
          className={`text-9xl font-bold ${totalRevenue > 0 ? "text-green-600" : "text-red-600"}`}
        >
          {totalRevenue}€
        </p>
      </div>
    </div>
  );
};
