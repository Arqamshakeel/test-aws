import CartBadgeReducer from "./CartBadgeReducer";
import OrderBadgeReducer from "./OrderBadgeReducer";
import LoginReducer from "./LoginReducer";

import { combineReducers } from "redux";

export default combineReducers({
  counter: CartBadgeReducer,
  order: OrderBadgeReducer,
  login: LoginReducer,
});
