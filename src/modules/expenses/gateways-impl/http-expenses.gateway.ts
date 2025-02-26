import { AxiosInstance } from "axios";
import { IExpensesGateway } from "../core/gateways/expenses.gateway";
import { ExpensesDomainModel } from "../core/models/expenses.domain-model";

export class HttpExpensesGateway implements IExpensesGateway {
  constructor(private readonly httpClient: AxiosInstance) {}

  async getExpenses(): Promise<ExpensesDomainModel.Expense> {
    const response = await this.httpClient.get<ExpensesDomainModel.Expense>(
      "/le-navire-expenses/payments/get-expenses-data"
    );

    return response.data;
  }
}
