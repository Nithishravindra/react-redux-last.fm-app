import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootreducer from "./reducers/rootReducer";

const enhancers = compose(applyMiddleware(thunk));

export default function configureStore(initialState) {
  return createStore(rootreducer, initialState, enhancers);
}
