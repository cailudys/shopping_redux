// 这个文件中放置的是和商品相关的reducer
// 我们用redux-actions 来简化 reducer的创建。
import { handleActions as createReducer } from "redux-actions";

const initialState = [];

export default createReducer({}, initialState);
