export namespace LedgerDomainModel {
  export type Ledger = {
    totalRevenue: number;
    totalExpenses: number;
    totalReceived: number;
    payments: Payment[];
  };

  export type Payment = {
    amount: number;
    name: string;
    email: string;
    date?: string;
    paymentType: "one-time" | "recurring";
  };

  export type Contributor = {
    amount: number;
    name: string;
  };

  export type Expenses = {
    amount: number;
    date: string;
  };
}
