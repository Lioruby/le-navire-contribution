import { AxiosInstance } from "axios";
import {
  ILedgerGateway,
  LedgerResponse,
} from "../core/gateways/ledger.gateway";
import { LedgerDomainModel } from "../core/models/ledger.domain-model";

export class HttpLedgerGateway implements ILedgerGateway {
  constructor(private readonly httpClient: AxiosInstance) {}

  async getLedger(): Promise<LedgerResponse> {
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
      payments: response.data.payments.map((payment) => ({
        amount: payment.amount,
        name: payment.name,
        email: payment.email,
        paymentType: payment.payment_type,
      })),
      allTimeTopContributors: response.data.allTimeTopContributors,
      monthlyTopContributors: response.data.monthlyTopContributors,
    };
  }

  async getContributorsRank(): Promise<LedgerDomainModel.Contributor[]> {
    const response = await this.httpClient.get<{
      contributors: LedgerDomainModel.Contributor[];
    }>("/ledger/contributors-rank");
    return response.data.contributors;
  }

  async getPaymentsHistory(): Promise<LedgerDomainModel.Payment[]> {
    const response = await this.httpClient.get<{
      payments: {
        amount: number;
        name: string;
        email: string;
        payment_type: "one-time" | "recurring";
        date: string;
      }[];
    }>("/ledger/payments-history");
    return response.data.payments.map((payment) => ({
      amount: payment.amount,
      name: payment.name,
      email: payment.email,
      paymentType: payment.payment_type,
      date: payment.date,
    }));
  }

  async getExpensesHistory(): Promise<LedgerDomainModel.Expenses[]> {
    const response = await this.httpClient.get<{
      expenses: LedgerDomainModel.Expenses[];
    }>("/ledger/expenses-history");
    return response.data.expenses;
  }
}
