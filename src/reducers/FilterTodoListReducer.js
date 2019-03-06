import {SHOW_ALL, SHOW_VISIBILITY} from '../constants';

const filteredData = (state = SHOW_ALL, action ) =>{
  /* console.log("Filter Reducer :- ", action.payload); */
  switch(action.type){
    case SHOW_VISIBILITY : 
      return action.payload;
    default :
      return state;
  }
};
export default filteredData;