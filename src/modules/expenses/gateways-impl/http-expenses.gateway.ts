import { AxiosInstance } from "axios";
import {
  IExpensesGateway,
  ExpensesResponse,
} from "../core/gateways/expenses.gateway";

export class HttpExpensesGateway implements IExpensesGateway {
  constructor(private readonly httpClient: AxiosInstance) {}

  async getExpenses(): Promise<ExpensesResponse> {
    const response = await this.httpClient.get<{
      totalRevenue: number;
      totalExpenses: number;
      totalReceived: number;
      payments: {
        amount: number;
        name: string;
        email: string;
        payment_type: "one-time" | "recurring";
      }[];
      allTimeTopContributors: {
        amount: number;
        name: string;
      }[];
      monthlyTopContributors: {
        amount: number;
        name: string;
      }[];
    }>("/ledger");

    return {
      totalRevenue: response.data.totalRevenue,
      totalExpenses: response.data.totalExpenses,
      totalReceived: response.data.totalReceived,
      payments: response.data.payments
        .map((payment) => ({
          amount: payment.amount,
          name: payment.name,
          email: payment.email,
          paymentType: payment.payment_type,
        }))
        .reverse(),
      allTimeTopContributors: response.data.allTimeTopContributors,
      monthlyTopContributors: response.data.monthlyTopContributors,
    };
  }
}
