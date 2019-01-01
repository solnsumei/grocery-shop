import { combineReducers } from 'redux';
import groceryItems from './groceryItemsReducer';

const rootReducer = combineReducers({
  groceryItems,
});

export default rootReducer;