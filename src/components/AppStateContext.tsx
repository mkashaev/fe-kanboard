import React, { createContext, useReducer, useContext } from "react";
import { IAppState, appData } from "../services/data";

interface AppStateContextProps {
  state: IAppState;
}

type Action =
  | {
      type: "ADD_LIST";
      payload: string;
    }
  | {
      type: "ADD_TASK";
      payload: { text: string; taskId: string };
    };

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const useAppState = () => {
  return useContext(AppStateContext);
};

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);

  return (
    <AppStateContext.Provider value={{ state: appData }}>
      {children}
    </AppStateContext.Provider>
  );
};

const appStateReducer = (state: IAppState, action: Action): IAppState => {
  switch (action.type) {
    case "ADD_LIST": {
      return {
        ...state,
      };
    }

    case "ADD_TASK": {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};
