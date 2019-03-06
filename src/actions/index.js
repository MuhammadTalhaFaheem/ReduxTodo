import {ADD_ITEM, SHOW_VISIBILITY,REMOVE_ITEM} from '../constants/';
export const addTodoItem = (todoObject) =>{
  //console.log("Action Todo Item :- ", todoObject);
  return {
    type : ADD_ITEM,
    payload : todoObject
  }
};
export const todoListFilter = (filter) => {
  /* console.log("Filter : - ",filter); */
  return {
    type : SHOW_VISIBILITY,
    payload : filter
  }
}
export const removeTodoListItem = (itemId) =>{
  return {
    type : REMOVE_ITEM,
    payload : itemId
  }
}
 