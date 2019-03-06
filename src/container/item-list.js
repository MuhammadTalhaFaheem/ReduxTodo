import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as R from 'ramda';
import { removeTodoListItem } from "../actions";
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants';

class ItemList extends Component{

  itemStatusCheck = (itemId,e) =>{
    console.log("My Status")
    if(e.target.checked === true){
      /* console.log("States True", itemId ); */
      this.props.items.map((item) => {
        if(item.id === itemId){
          item.status = true;
          console.log("States True", item );
        }
      });
      
    }
    else if(e.target.checked === false){
      this.props.items.map((item) => {
        if(item.id === itemId){
          item.status = false;
          console.log("States False", this.props.items);
        }
      });
      
    }
  }
  createItemList(){
    return this.props.items.map((item) => {
      let checkedStatus = item.status === true ? "checked" : "";
      return (
        
          <li key={item.id}> 
            <div>
              <label className="checkbox-container">
                <span>{item.name}</span>
                <input type="checkbox"  defaultChecked={checkedStatus} onClick={this.itemStatusCheck.bind(this,item.id)} /* onClick={} *//>
                <span className="checkmark"></span>
              </label>
            </div>
            <button onClick={() =>this.props.removeTodoListItem(item.id)}><span>X</span></button>
          </li>
      );
    })
  }

  render(){
    console.log("OutPut :- ", this.props.filteredData)
    return(
      <ul>
        <div className="list-data-flex">
          {this.createItemList()}
        </div>
        
      </ul>
    );
  }
}

const getFilteredData = (items, filter) =>{
  let CheckStatusData;
  let todoDataFilter;
  switch(filter){
    case SHOW_ALL:
      return items;
    case SHOW_ACTIVE :
      CheckStatusData =R.propEq('status',false);
      todoDataFilter = R.filter(CheckStatusData,items);
      return todoDataFilter;
    case SHOW_COMPLETED :
      CheckStatusData =R.propEq('status',true);
      todoDataFilter = R.filter(CheckStatusData,items);
      return todoDataFilter;  
    default:
      return items;
  }
}
/* const removeItemById = (items,itemId) => {
  let deleteById =R.reject(R.propEq('id',itemId),items)
  console.log("Remove : -", itemId , deleteById);
  return deleteById;
} */

function mapStateToProps(state){
  return {
    items : getFilteredData(state.items, state.filteredData),
    filteredData : state.filteredData,
   /*  TodoItem : removeItemById(state.items,state.TodoItem) */
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    removeTodoListItem : removeTodoListItem
  },dispatch)
} 

export default connect(mapStateToProps,mapDispatchToProps)(ItemList)