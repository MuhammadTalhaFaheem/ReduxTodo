import React, { Component } from "react";
/* import * as R from 'ramda'; */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { todoListFilter } from "../actions/index";
import { SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETED } from "../constants/";
class FilterContainer extends Component {
  render() {
    var itemsLength = (this.props.items).length;
    /* console.log("Filter : - ", this.props.items) */
    return (
      <div className="filter-div">
        <p>{itemsLength} items left</p>
        <button onClick={() =>this.props.todoListFilter(SHOW_ALL) } ><span>All</span></button>
        <button onClick={() =>this.props.todoListFilter(SHOW_ACTIVE) }><span>Active</span></button>
        <button onClick={() =>this.props.todoListFilter(SHOW_COMPLETED) }><span>Completed</span></button>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    items : state.items,
    /* filteredData */
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    todoListFilter : todoListFilter
  },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(FilterContainer);