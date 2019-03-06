import React, {Component} from 'react';
import AddItem from '../container/AddItem';
class AddItemComponent extends Component{
  render(){
    return(
      <div className="main-input-div">
        <AddItem />
      </div>
    );
  }
}
export default AddItemComponent;