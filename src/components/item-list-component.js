import React, { Component } from "react";
import ItemList from '../container/item-list'; 

class ItemComponent extends Component{
  render(){
    return(
      <div className="list-div">
        <ItemList />   
      </div>
    );
  }
}
export default ItemComponent;