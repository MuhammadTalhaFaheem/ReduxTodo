import { combineReducers } from 'redux';
import TodoItem from './ItemReducer';
import filteredData from "./FilterTodoListReducer";

const allReducers = combineReducers({
  items : TodoItem,
  filteredData : filteredData
});
export default allReducers;