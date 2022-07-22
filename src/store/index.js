// 1. 第一步需要创建store对象，那么就需要先从插件中引入 createStore方法。
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/root.reducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/root.saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
