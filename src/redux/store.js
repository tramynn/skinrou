import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import userReducer from "./reducers/userReducer";
import routinesReducer from "./reducers/routinesReducer";
import chatReducer from "./reducers/chatReducer";

const rootReducer = combineReducers({
  userReducer,
  routinesReducer,
  chatReducer
});

export default createStore(rootReducer, applyMiddleware(promise));
