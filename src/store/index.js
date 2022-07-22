// 1. 第一步需要创建store对象，那么就需要先从插件中引入 createStore方法。
import { createStore } from "redux";
import rootReducer from "./reducers/root.reducer";

export const store = createStore(rootReducer);
