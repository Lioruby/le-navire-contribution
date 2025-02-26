import { ExpensesDomainModel } from "../models/expenses.domain-model";

export interface IExpensesGateway {
  getExpenses(): Promise<ExpensesDomainModel.Expense>;
}
