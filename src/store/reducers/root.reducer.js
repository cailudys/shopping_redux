// 1.这个文件中存储的是被合并后的最终的 大的 reducer

// 2.那么我们需要使用到插件中的combineReducers 方法来合并 所有小的 reducer。
import { combineReducers } from "redux";
import productReducer from "./product.reducer";

// { products: [] }
export default combineReducers({
  products: productReducer,
});
