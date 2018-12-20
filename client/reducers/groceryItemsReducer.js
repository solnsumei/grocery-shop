import * as types from '../actions/actionTypes';
import initialState from './initialState';

/**
 * Grocery Items reducer
 * handles adding, fetching, buying and deleting grocery items in the state
 * @param {object} state
 * @param {object} action
 * 
 * @returns {object} state
 */

 export default function (state = initialState.groceryItems, action) {
   switch (action.type) {
     case types.LOAD_ITEMS_SUCCESS:
      return action.items;

     case types.ADD_ITEM_SUCCESS:
       return [...state, action.item];

     case types.TOGGLE_BUY_ITEM_SUCCESS:
       return [...state.filter((item) => item._id !== action.item._id), action.item];

     case types.DELETE_ITEM_SUCCESS:
       return [...state.filter((item) => item._id !== action.item._id)];

     default:
       return state;
   }
 }