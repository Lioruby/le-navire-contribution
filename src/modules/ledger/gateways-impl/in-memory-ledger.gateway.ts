import {
  ILedgerGateway,
  LedgerResponse,
} from "../core/gateways/ledger.gateway";
import { LedgerDomainModel } from "../core/models/ledger.domain-model";

export class InMemoryLedgerGateway implements ILedgerGateway {
  getLedger(): Promise<LedgerResponse> {
    return Promise.resolve({
      totalRevenue: 1000,
      totalExpenses: 500,
      totalReceived: 500,
      payments: [],
      allTimeTopContributors: [],
      monthlyTopContributors: [
        {
          name: "John Doe",
          amount: 100,
        },
        {
          name: "Jane Doe",
          amount: 200,
        },
        {
          name: "John Smith",
          amount: 300,
        },
        {
          name: "Jane Smith",
          amount: 400,
        },
        {
          name: "John Doe",
          amount: 100,
        },
        {
          name: "Jane Doe",
          amount: 200,
        },
        {
          name: "John Smith",
          amount: 300,
        },
        {
          name: "Jane Smith",
          amount: 400,
        },
        {
          name: "John Doe",
          amount: 100,
        },
        {
          name: "Jane Doe",
          amount: 200,
        },
        {
          name: "John Smith",
          amount: 300,
        },
        {
          name: "Jane Smith",
          amount: 400,
        },
        {
          name: "John Doe",
          amount: 100,
        },
        {
          name: "Jane Doe",
          amount: 200,
        },
        {
          name: "John Smith",
          amount: 300,
        },
        {
          name: "Jane Smith",
          amount: 400,
        },
        {
          name: "John Doe",
          amount: 100,
        },
        {
          name: "Jane Doe",
          amount: 200,
        },
        {
          name: "John Smith",
          amount: 300,
        },
        {
          name: "Jane Smith",
          amount: 400,
        },
        {
          name: "John Doe",
          amount: 100,
        },
        {
          name: "Jane Doe",
          amount: 200,
        },
        {
          name: "John Smith",
          amount: 300,
        },
      ],
    });
  }

  getContributorsRank(): Promise<LedgerDomainModel.Contributor[]> {
    return Promise.resolve([]);
  }

  getPaymentsHistory(): Promise<LedgerDomainModel.Payment[]> {
    return Promise.resolve([]);
  }

  getExpensesHistory(): Promise<LedgerDomainModel.Expenses[]> {
    return Promise.resolve([]);
  }
}
