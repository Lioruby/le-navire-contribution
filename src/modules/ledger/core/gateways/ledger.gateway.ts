import { LedgerDomainModel } from "../models/ledger.domain-model";

export type LedgerResponse = {
  totalRevenue: number;
  totalExpenses: number;
  totalReceived: number;
  payments: LedgerDomainModel.Payment[];
  allTimeTopContributors: LedgerDomainModel.Contributor[];
  monthlyTopContributors: LedgerDomainModel.Contributor[];
};

export interface ILedgerGateway {
  getLedger(): Promise<LedgerResponse>;
  getContributorsRank(): Promise<LedgerDomainModel.Contributor[]>;
  getPaymentsHistory(): Promise<LedgerDomainModel.Payment[]>;
  getExpensesHistory(): Promise<LedgerDomainModel.Expenses[]>;
}
