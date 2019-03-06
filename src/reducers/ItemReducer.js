import {ADD_ITEM,REMOVE_ITEM} from '../constants/';
import * as R from 'ramda';


const INITIAL_STATE = [
  {
    'id' : 1,
    'name': "Play",
    'status': false
  },
  {
    'id' : 2,
    'name': "Work",
    'status': false
  },
  {
    'id' : 3,
    'name': "Dance",
    'status': true
  },
  {
    'id' : 4,
    'name': "List",
    'status': false
  },
  {
    'id' : 5,
    'name': "Data",
    'status': true
  }
];
const TodoItem = (state =INITIAL_STATE, action ) =>{
  switch(action.type){
    case ADD_ITEM :
    
    return [
      ...state,action.payload
    ]
    case REMOVE_ITEM :
      let deleteById =R.reject(R.propEq('id',action.payload),state);
      /* console.log(deleteById); */
      return deleteById;
    default :
      return state;
  }
}
export default TodoItem;
