import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
// index
import reducers from "./reducers/index";

const rootReducers = combineReducers(reducers);

export const store = createStore(rootReducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
