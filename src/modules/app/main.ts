import { InMemoryAnalyticsGateway } from "@root/modules/global/gateways-impl/in-memory-analytics.gateway";
import { LocalStorageProvider } from "@root/modules/global/providers-impl/local-storage.provider";
import { BASE_URL, Dependencies } from "@root/modules/store/dependencies";
import { AppStore, createStore } from "@root/modules/store/store";
import axios, { AxiosInstance } from "axios";
import { HttpLedgerGateway } from "../ledger/gateways-impl/http-ledger.gateway";
import { HttpCheckoutGateway } from "../ledger/gateways-impl/http-checkout.gateway";

export class App {
  public dependencies: Dependencies;
  public store: AppStore;
  public httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: BASE_URL,
    });
    this.dependencies = this.setupDependencies();
    this.store = createStore({ dependencies: this.dependencies });
  }

  setupDependencies(): Dependencies {
    const ledgerGateway = new HttpLedgerGateway(this.httpClient);
    const checkoutGateway = new HttpCheckoutGateway(this.httpClient);

    return {
      analyticsGateway: new InMemoryAnalyticsGateway(),
      storageProvider: new LocalStorageProvider(),
      ledgerGateway,
      checkoutGateway,
    };
  }
}

export const app = new App();
