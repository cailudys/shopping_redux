import { takeEvery, put } from "redux-saga/effects";
import { loadProducts, saveProducts } from "../actions/produt.actions";
import axios from "axios";

// 获取商品列表数据
function* handleLoadProducts() {
  const { data } = yield axios.get("http://localhost:3005/goods");
  yield put(saveProducts(data));
}

export default function* productSaga() {
  yield takeEvery(loadProducts, handleLoadProducts);
}
