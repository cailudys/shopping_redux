import { createAction } from "redux-actions";

// 1. 向服务器发送请求 告诉服务器我们要将哪一个商品添加到购物车中。
export const addProductToCart = createAction("addProductToCart");
// 2. 添加商品的操作，同步到本地状态。
export const addProductToLocalCart = createAction("addProductToLocalCart");
// 3. 向服务器端发送请求， 获取购物车列表数据（初始化的列表数据）
export const loadCarts = createAction("loadCarts");
// 4. 获取初始列表的操作，同步到本地状态
export const saveCarts = createAction("saveCarts");
// 5. 向服务器但发送请求 告诉服务器端我们要删除哪一个商品
export const deleteProductFromCart = createAction("deleteProductFromCart");
// 6. 删除商品的操作，同步到本地状态
export const deleteProductFromLocalCart = createAction(
  "deleteProductFromLocalCart"
);
// 7.向服务器端发送请求， 告诉服务器我们要将哪一个商品的数量更改成什么
export const changeServiceProductNumber = createAction(
  "changeServiceProductNumber"
);
// 7. 更新熟练的操作，同步到本地状态
export const changeLocalProductNumber = createAction(
  "changeLocalProductNumber"
);
