import React from 'react';
import { shallow } from 'enzyme';
import GroceryItem from '../../src/components/GroceryItem';
import mockData from '../__mocks__/mockStoreData'

const props = {
  item: mockData.items[0],
  onDelete: jest.fn(() => {}),
  togglePurchasedItem: jest.fn(() => {}),
};

describe('Grocery Item', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<GroceryItem {...props} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('button')).toHaveLength(2);
    expect(wrapper.find('.btn-danger')).toHaveLength(1);
  });

  it('should render a strike through if item is purchased', () => {
    const newProps = { ...props };
    newProps.item.purchased = true;
    const wrapper = shallow(<GroceryItem {...newProps} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('button').at(0).text()).toBe('UNBUY');
    expect(wrapper.find('h3').at(0).hasClass('strikethrough')).toBe(true);
  });

  it('should call toggle purchase item when buy button is clicked', () => {
    const wrapper = shallow(<GroceryItem {...props} />);
    const spy = jest.spyOn(props, 'togglePurchasedItem');
    wrapper.find('button').at(0).simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('should call onDelete delete button is clicked', () => {
    const wrapper = shallow(<GroceryItem {...props} />);
    const spy = jest.spyOn(props, 'onDelete');
    wrapper.find('button').at(1).simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});