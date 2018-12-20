import React from 'react';

const GroceryItem = props => {

  const purchasedItemClassName = props.item.purchased 
    ? 'btn btn-default btn-lg' : 'btn btn-success btn-lg';

  const purchasedItemButtonText = props.item.purchased
    ? 'UNBUY' : 'BUY';
 
  return (
  <div className="col-sm-12">
    <div className="row padding-bottom">
      <div className="col-sm-5 col-8">
        <h3 className={props.item.purchased ? "strikethrough" : ""}>
          {props.item.name}
        </h3>
      </div>
      <div className="col-sm-2 col-2 no-padding-left">
        <button
          className={purchasedItemClassName}
          onClick={() => props.togglePurchasedItem(props.item)}>
          {purchasedItemButtonText}
        </button>
      </div>
        <div className="col-sm-2 col-2 no-padding-left">
          <button
            className="btn btn-danger btn-lg margin-left"
            onClick={() => props.onDelete(props.item)}>&times;
        </button>
        </div>
    </div>
  </div>
  );
}

export default GroceryItem;