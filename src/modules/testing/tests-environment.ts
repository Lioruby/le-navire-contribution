import { createStore } from "@root/modules/store/store";
import { Dependencies } from "@root/modules/store/dependencies";
import { StubStorageProvider } from "@root/modules/global/core/testing/stub-storage.provider";
import { InMemoryAnalyticsGateway } from "@root/modules/global/gateways-impl/in-memory-analytics.gateway";
import { AppState } from "@root/modules/store/app-state";
import { InMemoryLedgerGateway } from "../ledger/gateways-impl/in-memory-ledger.gateway";
import { InMemoryCheckoutGateway } from "../ledger/gateways-impl/in-memory-checkout.gateway";

/**
 * Create testing dependencies with provided defaults
 * @param dependencies
 * @returns
 */
const createDependencies = (
  dependencies?: Partial<Dependencies>
): Dependencies => ({
  analyticsGateway: new InMemoryAnalyticsGateway(),
  storageProvider: new StubStorageProvider(),
  ledgerGateway: new InMemoryLedgerGateway(),
  checkoutGateway: new InMemoryCheckoutGateway(),
  ...dependencies,
});

/**
 * Creates store initialized with a partial state
 * @param config
 * @returns
 */
export const createTestStore = (config?: {
  initialState?: Partial<AppState>;
  dependencies?: Partial<Dependencies>;
}) => {
  const initialStore = createStore({
    dependencies: createDependencies(config?.dependencies),
  });

  const initialState = {
    ...initialStore.getState(),
    ...config?.initialState,
  };

  const store = createStore({
    initialState,
    dependencies: createDependencies(config?.dependencies),
  });

  return store;
};

/**
 * Useful for testing selectors without setting redux up
 * @param partialState
 * @returns
 */
export const createTestState = (partialState?: Partial<AppState>) => {
  const store = createStore({
    dependencies: createDependencies(),
  });

  const storeInitialState = store.getState();

  const merged = {
    ...storeInitialState,
    ...partialState,
  };

  return createTestStore({ initialState: merged }).getState();
};
