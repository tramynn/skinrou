import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import userReducer from "./reducers/userReducer";
import routinesReducer from "./reducers/routinesReducer";

const rootReducer = combineReducers({
  userReducer,
  routinesReducer
});

export default createStore(rootReducer, applyMiddleware(promise));
