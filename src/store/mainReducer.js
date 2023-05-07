import user from "./userReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  user,
});

export default allReducers;
