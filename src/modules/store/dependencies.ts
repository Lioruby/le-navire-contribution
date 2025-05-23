import { IAnalyticsGateway } from "@root/modules/global/core/gateways/analytics.gateway";
import { IStorageProvider } from "@root/modules/global/core/providers/storage.provider";
import { ILedgerGateway } from "../ledger/core/gateways/ledger.gateway";

export const BASE_URL = "https://lenavire-go-0b9a35f42e35.herokuapp.com/";
export const WS_URL =
  "wss://lenavire-go-0b9a35f42e35.herokuapp.com/ledger-activity";

export type Dependencies = {
  /* PROVIDERS */
  storageProvider: IStorageProvider;

  /* GATEWAYS */
  analyticsGateway: IAnalyticsGateway;
  ledgerGateway: ILedgerGateway;
};
