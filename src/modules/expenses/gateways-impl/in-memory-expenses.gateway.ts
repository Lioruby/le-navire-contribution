import {
  IExpensesGateway,
  ExpensesResponse,
} from "../core/gateways/expenses.gateway";

export class InMemoryExpensesGateway implements IExpensesGateway {
  getExpenses(): Promise<ExpensesResponse> {
    return Promise.resolve({
      totalRevenue: 1000,
      totalExpenses: 500,
      totalReceived: 500,
      payments: [],
      contributors: [],
    });
  }
}
