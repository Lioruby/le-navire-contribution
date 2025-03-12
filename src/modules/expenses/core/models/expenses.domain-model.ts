export namespace ExpensesDomainModel {
  export type Expense = {
    totalRevenue: number;
    totalExpenses: number;
    totalReceived: number;
    payments: Payment[];
  };

  export type Payment = {
    amount: number;
    name: string;
    email: string;
    paymentType: "one-time" | "recurring";
  };

  export type Contributor = {
    amount: number;
    name: string;
  };
}
