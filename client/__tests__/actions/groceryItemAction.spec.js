import expect from 'expect';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as types from '../../src/actions/actionTypes';
import mockItems from '../__mocks__/mockItems';
import { addItem, loadItems, toggleBuyItem, deleteItem } from '../../src/actions/groceryItemActions';

let store = null;
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('>>>A C T I O N --- groceryItemsActions', () => {
  beforeEach(() => {
    moxios.install();
    store = mockStore({});
  });
  afterEach(() => moxios.uninstall());

  // load items action
  describe('loadItems', () => {
    it('should create a LOAD_ITEMS_SUCCESS action', (done) => {
      moxios.stubRequest('/items', {
        status: 200,
        response: mockItems.items
      });

      const expectedActions = [
        {
          type: types.LOAD_ITEMS_SUCCESS,
          items: mockItems.items
        }
      ];

      store.dispatch(loadItems())
        .then(() => {
          const actions = store.getActions();
          expect(actions).toEqual(expectedActions);
          done();
        });
    });
  });

  describe('addItem', () => {
    it('should create a ADD_ITEM_SUCCESS action', (done) => {
      moxios.stubRequest('/items', {
        status: 201,
        response: mockItems.item
      });

      const expectedActions = [
        {
          type: types.ADD_ITEM_SUCCESS,
          item: mockItems.item
        }
      ];

      store.dispatch(addItem(mockItems.itemWithoutId))
        .then(() => {
          const actions = store.getActions();
          expect(actions).toEqual(expectedActions);
          done();
        });
    });
  });

  describe('toggleBuyItem', () => {
    it('should create a TOGGLE_BUY_ITEM_SUCCESS action', (done) => {
      moxios.stubRequest('/items/1', {
        status: 200,
        response: mockItems.item
      });

      const expected = { ...mockItems.item }
      expected.purchased = true;

      const expectedActions = [
        {
          type: types.TOGGLE_BUY_ITEM_SUCCESS,
          item: expected
        }
      ];

      store.dispatch(toggleBuyItem(mockItems.item))
        .then(() => {
          const actions = store.getActions();
          expect(actions).toEqual(expectedActions);
          done();
        });
    });
  });

  describe('deleteItem', () => {
    it('should create a DELETE_ITEM_SUCCESS action', (done) => {
      moxios.stubRequest('/items/1', {
        status: 200,
        response: true
      });

      const expectedActions = [
        {
          type: types.DELETE_ITEM_SUCCESS,
          item: mockItems.item
        }
      ];

      store.dispatch(deleteItem(mockItems.item))
        .then(() => {
          const actions = store.getActions();
          expect(actions).toEqual(expectedActions);
          done();
        });
    });
  });
});
