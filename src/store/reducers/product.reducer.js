// 这个文件中放置的是和商品相关的reducer
// 我们用redux-actions 来简化 reducer的创建。
import { handleActions as createReducer } from "redux-actions";
import { saveProducts } from "../actions/produt.actions";

const initialState = [];

// 将商品列表数据保存在本地的store对象中
const handleSaveProducts = (state, action) => action.payload;

// 这里导出的是一个普通JavaScript对象
export default createReducer(
  {
    // 将商品列表数据保存在本地的store对象中
    [saveProducts]: handleSaveProducts,
  },
  initialState
);
