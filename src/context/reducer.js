import { CHANGE_DASHBOARD } from "./actions.js";

import { initialState } from "./appContext.jsx";

const reducer = (state, actions) => {
  if (actions.type === CHANGE_DASHBOARD) {
    return {
      ...state,
      dashboard: actions.payload.value,
    };
  }

  return state;
};

export default reducer;
