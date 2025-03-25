import { ExpensesDomainModel } from "../models/expenses.domain-model";

export type ExpensesResponse = {
  totalRevenue: number;
  totalExpenses: number;
  totalReceived: number;
  payments: ExpensesDomainModel.Payment[];
  allTimeTopContributors: ExpensesDomainModel.Contributor[];
  monthlyTopContributors: ExpensesDomainModel.Contributor[];
};

export interface IExpensesGateway {
  getExpenses(): Promise<ExpensesResponse>;
}
