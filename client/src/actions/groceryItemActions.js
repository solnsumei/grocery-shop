import axios from 'axios';
import * as types from './actionTypes';

export const addItemSuccess = item => ({
  type: types.ADD_ITEM_SUCCESS, item
});

export const loadItemsSuccess = items => ({
  type: types.LOAD_ITEMS_SUCCESS, items
});

export const toggleBuyItemSuccess = item => ({
  type: types.TOGGLE_BUY_ITEM_SUCCESS, item
});

export const deleteItemSuccess = item => ({
  type: types.DELETE_ITEM_SUCCESS, item
});

export const addItem = inputName => (dispatch) => {
  const item = { name: inputName, purchased: false };
  return axios.post('/items', item)
  .then(({ data }) => dispatch(addItemSuccess(data)))
  .catch(({ response }) => console.log(response));
}
  
export const toggleBuyItem = item => (dispatch) => {
  const updatedItem = {...item};
  updatedItem.purchased = !item.purchased;

  return axios.patch(`/items/${item._id}`, updatedItem)
    .then(() => dispatch(toggleBuyItemSuccess(updatedItem)))
    .catch((response) => console.log(response));
}
  
export const loadItems = () => dispatch => {
  return axios.get('/items')
    .then(({ data }) => dispatch(loadItemsSuccess(data)))
    .catch(({ response }) => {
      console.log(response);
    });
}

export const deleteItem = item => dispatch => {
  return axios.delete(`/items/${item._id}`)
    .then(() => dispatch(deleteItemSuccess(item)))
    .catch((response) => console.log(response));
}
  