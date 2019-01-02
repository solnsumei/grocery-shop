import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import configureStore from './store/configureStore';
import '../../node_modules/bootswatch/dist/darkly/bootstrap.min.css';
import './styles/styles.css';
import GroceryItemList from './components/GroceryItemList';
import { loadItems } from './actions/groceryItemActions';

axios.defaults.baseURL = '/api';

const store = configureStore();
store.dispatch(loadItems());

ReactDOM.render(
  <Provider store={store}>
    <GroceryItemList />
  </Provider>, document.getElementById('app')
  );