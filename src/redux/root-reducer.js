import { combineReducers } from "redux";
import colorReducer from "redux/color-reducer";
import authReducer from "redux/auth-reducer";

const rootReducer = combineReducers({
  // colorReducer: colorReducer
  colorReducer,
  authReducer
});

export default rootReducer;