import { AxiosInstance } from "axios";
import {
  IExpensesGateway,
  ExpensesResponse,
} from "../core/gateways/expenses.gateway";

export class HttpExpensesGateway implements IExpensesGateway {
  constructor(private readonly httpClient: AxiosInstance) {}

  async getExpenses(): Promise<ExpensesResponse> {
    const response = await this.httpClient.get<ExpensesResponse>(
      "/le-navire-expenses/payments/get-expenses-data"
    );

    return response.data;
  }
}
