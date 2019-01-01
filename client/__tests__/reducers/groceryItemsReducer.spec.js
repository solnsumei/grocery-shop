import expect from 'expect';
import reducer from '../../src/reducers/groceryItemsReducer';
import mockItems from '../__mocks__/mockItems';
import {
  loadItemsSuccess, addItemSuccess, toggleBuyItemSuccess, deleteItemSuccess
} from '../../src/actions/groceryItemActions';

let initialState = [];
let newState;

describe('Grocery Items reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, initialState)).toEqual(initialState);
  });

  it('should handle LOAD_ITEMS_SUCCESS', () => {
    newState = reducer(initialState, loadItemsSuccess(mockItems.items));
    expect(newState).toEqual(mockItems.items);
  });

  it('should handle ADD_ITEM_SUCCESS', () => {
    newState = reducer(initialState, addItemSuccess(mockItems.item));
    expect(newState).toEqual([mockItems.item]);
  });

  it('should handle TOGGLE_BUY_SUCCESS', () => {
    initialState = [{ _id: 1, name: 'Fake Category', purchased: true}];
    newState = reducer(initialState, toggleBuyItemSuccess(mockItems.item));
    expect(newState).toEqual([mockItems.item]);
  });

  it('should handle DELETE_ITEM_SUCCESS', () => {
    initialState = [mockItems.item];
    newState = reducer(initialState, deleteItemSuccess(mockItems.item));
    expect(newState).toEqual([]);
  });
});