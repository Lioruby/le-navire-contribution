import { useDispatch } from "react-redux";

import {
  AnyAction,
  ThunkDispatch,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { Dependencies } from "@root/modules/store/dependencies";
import { AppState } from "@root/modules/store/app-state";

const reducers = combineReducers({});

export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = ThunkDispatch<AppState, Dependencies, AnyAction>;
export type AppGetState = AppStore["getState"];
export type ThunkApi = {
  dispatch: AppDispatch;
  state: AppState;
  extra: Dependencies;
};

export const createStore = (config: {
  initialState?: AppState;
  dependencies: Dependencies;
}) => {
  const store = configureStore({
    preloadedState: config?.initialState,
    reducer: reducers,
    devTools: true,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: config.dependencies,
        },
      });
    },
  });

  return store;
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
