import { Wallet } from "lucide-react";

export const TotalRevenue = ({ totalRevenue }: { totalRevenue: number }) => {
  return (
    <div className="p-10 rounded-xl shadow-md bg-gray-100 w-full md:w-fit">
      <div className="flex items-center justify-between">
        <h1 className="text-sm md:text-xl font-semibold">REVENUE TOTAL</h1>
        <div className="p-3 bg-blue-700 text-blue-100 rounded-full">
          <Wallet className="w-7 h-7" />
        </div>
      </div>
      <div className="mt-6">
        <p
          className={`text-7xl font-bold ${totalRevenue > 0 ? "text-green-500" : "text-red-500"}`}
        >
          {totalRevenue}€
        </p>
      </div>
    </div>
  );
};
