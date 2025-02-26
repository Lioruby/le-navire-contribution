import { IAnalyticsGateway } from "@root/modules/global/core/gateways/analytics.gateway";
import { IStorageProvider } from "@root/modules/global/core/providers/storage.provider";
import { IExpensesGateway } from "../expenses/core/gateways/expenses.gateway";

export const BASE_URL = "https://inner-api-04d97b97193c.herokuapp.com";

export type Dependencies = {
  /* PROVIDERS */
  storageProvider: IStorageProvider;

  /* GATEWAYS */
  analyticsGateway: IAnalyticsGateway;
  expensesGateway: IExpensesGateway;
};
