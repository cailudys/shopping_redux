import { handleActions as createReducer } from "redux-actions";
import product from "../../components/product";
import {
  addProductToLocalCart,
  saveCarts,
  deleteProductFromLocalCart,
  changeLocalProductNumber,
} from "../actions/cart.actions";

const initialState = [];

// 将商品列表数据保存在本地的store对象中
// 这里拿到的state，指的所有的状态码？
// 这里的state形参指代的是原有的cart数据，不是整个store！
// 这里的action形参指代的是 普通的action 对象，是一个JavaScript对象 { style:"", payload }
const handleAddProductToLocalCart = (state, action) => {
  // 1. 要添加的商品没有在购物车中 直接添加
  // 2. 要添加的商品已经在购物车中 只需要将商品的数量加1

  // 将原有的购物车数据拷贝一份
  const newState = JSON.parse(JSON.stringify(state));
  const product = newState.find((product) => product.id === action.payload.id);
  if (product) {
    product.count = product.count + 1;
  } else {
    newState.push(action.payload);
  }
  return newState;
};

const handleSaveCarts = (state, action) => {
  return action.payload;
};

const handleDeleteProductFromLocalCart = (state, action) => {
  const index = action.payload.index;
  // 将原有的购物车数据拷贝一份
  const newState = JSON.parse(JSON.stringify(state));
  newState.splice(index, 1);
  return newState;
};

const handleChangeLocalProductNumber = (state, action) => {
  // 将原有的购物车数据拷贝一份
  const newState = JSON.parse(JSON.stringify(state));
  const product = newState.find((product) => product.id === action.payload.id);
  product.count = action.payload.count;
  return newState;
};

// 这里导出的是一个普通JavaScript对象
export default createReducer(
  {
    // 将商品列表数据保存在本地的store对象中
    [addProductToLocalCart]: handleAddProductToLocalCart,
    [saveCarts]: handleSaveCarts,
    [deleteProductFromLocalCart]: handleDeleteProductFromLocalCart,
    // 跟新本地购物车商品数量 这个状态
    [changeLocalProductNumber]: handleChangeLocalProductNumber,
  },
  initialState
);
