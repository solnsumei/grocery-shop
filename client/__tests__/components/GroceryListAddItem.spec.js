import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import ConnectedGroceryListAddItem, { GroceryAddListItem } from '../../src/components/GroceryListAddItem';
import mockData from '../__mocks__/mockStoreData';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore(mockData);

const props = {
  inputName: '',
  error: '',
  addGroceryItem: jest.fn(() => Promise.resolve()),
};

describe('Grocery Add List Item Page', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<GroceryAddListItem {...props} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('form')).toHaveLength(1);
  });

  it('should call handleInputName when input is changed', () => {
    const value = "ChinChin";
    const wrapper = shallow(<GroceryAddListItem {...props} />);
    const spy = jest.spyOn(wrapper.instance(), 'handleInputName');
    wrapper.instance().handleInputName({ target: { value } });
    expect(spy).toHaveBeenCalled();
  });

  it('should call addItem function to have been called with errors', () => {
    const event = { preventDefault: () => {} };
    const wrapper = shallow(<GroceryAddListItem />);
    const spy = jest.spyOn(wrapper.instance(), 'addInputItem');
    wrapper.instance().addInputItem(event);
    expect(spy).toHaveBeenCalled();
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('should call addItem function to have been called successfully', () => {
    const event = { preventDefault: () => { } };
    const wrapper = shallow(<GroceryAddListItem {...props} />);
    wrapper.setState({
      inputName: 'Flakes'
    });
    const spy = jest.spyOn(wrapper.instance(), 'addInputItem');
    wrapper.instance().addInputItem(event);
    expect(spy).toHaveBeenCalled();
    expect(wrapper.find('p')).toHaveLength(0);
  });
});