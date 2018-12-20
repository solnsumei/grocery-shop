import mongoose from 'mongoose';

const GroceryItemSchema = {
  name: String,
  purchased: Boolean,
  id: String
};

const GroceryItem = mongoose.model('GroceryItem', GroceryItemSchema, 'groceryItems');

export default GroceryItem;