import React, {Component} from 'react';
import * as R from 'ramda';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { addTodoItem } from "../actions";

class AddItem extends Component{
  AddItemToList(e){
    if (e.key === "Enter") {
      let addTodoObject = {};
      console.log("Field Value : - " + e.target.value);
      /* console.log(this.props.items) */
      let lastObject = R.findLast(R.propEq())(this.props.items);
      let newObjectDataId = lastObject === undefined ? 1 :lastObject.id + 1; 
      console.log(lastObject);
      addTodoObject = {
        'id' : newObjectDataId,
        'name' : e.target.value,
        'status' : false
      }
      this.props.addTodoItem(addTodoObject);
      e.target.value = "";
      console.log("Add Item :- ",this.props.items)
    }
  }
/*   Jump(){
    console.log(this.props.items)
  } */
  
  render(){
    
    return(
      <input className="input-text" type="text" placeholder="What do You want to do ?" onKeyPress={this.AddItemToList.bind(this)} />
    );
  }
}
function mapStateToProps(state){
  return {
    items : state.items
    
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addTodoItem : addTodoItem
  },dispatch)
}
export default connect (mapStateToProps, mapDispatchToProps)(AddItem);