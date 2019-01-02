import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, toggleBuyItem } from '../actions/groceryItemActions';
import GroceryItem from './GroceryItem';
import GroceryAddListItem from './GroceryListAddItem';



export class GroceryItemList extends React.Component {

  handleDelete = item =>
    this.props.deleteGroceryItem(item);

  handlePurchase = item =>
    this.props.togglePurchasedItem(item);

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
              <h1 className="margin-top">Grocery List</h1>
              <br/>
          </div>
        </div>
        <div className="row">
          {this.props.items.map((item, index) => 
            (<GroceryItem 
                key={index}
                item={item}
                onDelete={this.handleDelete}
                togglePurchasedItem={this.handlePurchase} /> 
            ))
          }
        </div>
        <br/>
        <GroceryAddListItem />
      </div>
    );
  }
}

const sortItems = (items) => {
  return items.sort(function (a, b) {// ignore upper and lowercase
    return (a.name < b.name) ? -1 : ((a.name > b.name) ? 1 : 0);
  });
}

const mapStateToProps = (state, ownProps) => ({
  items: sortItems([...state.groceryItems])
});

const mapDispatchToProps = dispatch => ({
  deleteGroceryItem: (item) => dispatch(deleteItem(item)),
  togglePurchasedItem: (item) => dispatch(toggleBuyItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroceryItemList);