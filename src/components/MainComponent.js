import React,{ Component } from "react";
import './css/style.css';
import ItemComponent from './item-list-component';
import AddItemComponent from './AddItemComponent';
import FilterComponent from "./FilterItemComponent";
class MainComponent extends Component{
  render(){
    return(
      <div className="main-component">
        <div className="main-grid">
          <AddItemComponent />
          <FilterComponent />
          <ItemComponent />
          
          
        </div>
      </div>
    );
  }
}
export default MainComponent;