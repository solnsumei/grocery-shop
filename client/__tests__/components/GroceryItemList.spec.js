import React from 'react';
import { shallow } from 'enzyme';
import { toJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import ConnectedGroceryItemList, { GroceryItemList } from '../../src/components/GroceryItemList';
import mockData from '../__mocks__/mockStoreData';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore(mockData);

const props = {
  items: mockData.items,
  deleteGroceryItem: jest.fn(() => Promise.resolve()),
  togglePurchasedItem: jest.fn(() => Promise.resolve()),
};

describe('Grocery Item List Page', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<GroceryItemList {...props} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('GroceryItem')).toHaveLength(3);
  });

  it('should call handlePurchase when the buy button is clicked', () => {
    const newProps = { ...props };
    const wrapper = shallow(<GroceryItemList {...newProps} />);
    const spy = jest.spyOn(wrapper.instance(), 'handlePurchase');
    wrapper.instance().handlePurchase(newProps.items[0]);
    expect(spy).toHaveBeenCalled();
  });

  it('should call handleDelete when delete button is clicked', () => {
    const newProps = { ...props };
    const wrapper = shallow(<GroceryItemList {...newProps} />);
    const spy = jest.spyOn(wrapper.instance(), 'handleDelete');
    wrapper.instance().handleDelete(newProps.items[0]);
    expect(spy).toHaveBeenCalled();
  });
});