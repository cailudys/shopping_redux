import { takeEvery, put } from "redux-saga/effects";
import {
  addProductToCart,
  addProductToLocalCart,
  loadCarts,
  saveCarts,
  deleteProductFromCart,
  deleteProductFromLocalCart,
  changeServiceProductNumber,
  changeLocalProductNumber,
} from "../actions/cart.actions";
import axios from "axios";

// 向服务器发送要添加的商品；返回值是要添加的商品信息。
function* handleAddProductToCart(action) {
  const { data } = yield axios.post("http://localhost:3005/cart/add", {
    gid: action.payload,
  });
  yield put(addProductToLocalCart(data));
}

function* handleLoadCarts(action) {
  const { data } = yield axios.get("http://localhost:3005/cart");
  yield put(saveCarts(data));
}

// 向服务器端发送请求，告诉服务器我们要删除哪一个商品。
// 服务器返回数据中有个 index ， 对应着list中删除的索引。加上服务器没返回这个索引，那怎么办？
// 那也没事 ， 我们可以把 id传到 action.payload中去,不是说只能传递后端返回的data
function* handleDeleteProductFromCart(action) {
  const { data } = yield axios.delete("http://localhost:3005/cart/delete", {
    params: {
      cid: action.payload,
    },
  });
  yield put(deleteProductFromLocalCart(data));
}

function* handleChangeServiceProductNumber(action) {
  const { data } = yield axios.put(
    "http://localhost:3005/cart",
    action.payload
  );
  yield put(changeLocalProductNumber(data));
}

export default function* cartSaga() {
  // 将商品添加到购物车中
  yield takeEvery(addProductToCart, handleAddProductToCart);
  // 向服务器发送请求 获取购物车列表数据
  yield takeEvery(deleteProductFromCart, handleDeleteProductFromCart);
  // 向服务器端发送请求 告诉服务器端我们要删除哪一个商品。
  yield takeEvery(loadCarts, handleLoadCarts);
  yield takeEvery(changeServiceProductNumber, handleChangeServiceProductNumber);
}
