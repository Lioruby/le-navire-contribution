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
      monthlyTopContributors: [],
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
