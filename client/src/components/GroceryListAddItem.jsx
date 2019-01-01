import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/groceryItemActions'

export class GroceryAddListItem extends React.Component {
  state = {
    inputName: '',
    error: ''
  };

  handleInputName = (e) => {
    this.setState({
      inputName: e.target.value
    })
  }

   addInputItem = (e) => {
    e.preventDefault();

    if (this.state.inputName.trim().length == 0 
      || this.state.inputName.trim().length > 30) {
      this.setState({
        error: this.state.inputName.trim().length == 0 
          ? '**Name field cannot be empty!' 
          : '**Name field cannot be more than 30 characters'
      });
      
    } else {
      this.props.addGroceryItem(this.state.inputName);
      this.setState({
        inputName: '',
        error: ''
      });
    }
  }

  render() {
    return (
      <div className="grocery-addItem row">
        <div className="col-sm-12">
          <form onSubmit={this.addInputItem}>
            <div className="row">
              <div className="col-sm-5 col-8">
                <input
                  placeholder="Enter Item Name"
                  className="form-control form-control-lg"
                  value={this.state.inputName}
                  onChange={this.handleInputName} />
                  <br/>
                  {this.state.error.trim().length > 0 
                    && <p className="text-danger">{this.state.error}</p>}
              </div>
              <div className="col-sm-2 col-2 no-padding-left">
                <button className="btn btn-primary btn-lg">Add Item</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addGroceryItem: (item) => dispatch(addItem(item)) 
});

export default connect(null, mapDispatchToProps)(GroceryAddListItem);