import { IExpensesGateway } from "../core/gateways/expenses.gateway";
import { ExpensesDomainModel } from "../core/models/expenses.domain-model";

export class InMemoryExpensesGateway implements IExpensesGateway {
  getExpenses(): Promise<ExpensesDomainModel.Expense> {
    return Promise.resolve({
      totalRevenue: 1000,
      totalExpenses: 500,
      totalReceived: 500,
      payments: [],
    } as ExpensesDomainModel.Expense);
  }
}
