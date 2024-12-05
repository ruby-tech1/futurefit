import { useContext, useReducer, createContext } from "react";
import reducer from "./reducer.js";
import Dashboard from "../pages/Dashboard.jsx";

import { CHANGE_DASHBOARD } from "./actions.js";

const AppContext = createContext();

const initialState = {
  dashboard: "home",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeDashboard = (value) => {
    dispatch({ type: CHANGE_DASHBOARD, payload: { value } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        changeDashboard,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
