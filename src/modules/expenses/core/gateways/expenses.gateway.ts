import { ExpensesDomainModel } from "../models/expenses.domain-model";

export type ExpensesResponse = {
  totalRevenue: number;
  totalExpenses: number;
  totalReceived: number;
  payments: ExpensesDomainModel.Payment[];
  topContributors: ExpensesDomainModel.Contributor[];
};

export interface IExpensesGateway {
  getExpenses(): Promise<ExpensesResponse>;
}
