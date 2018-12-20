import mongoose from 'mongoose';
import GroceryItem from './models/GroceryItem';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/grocery-db';

mongoose.connect(databaseURL, { useNewUrlParser: true }, () => {
 mongoose.connection.db.dropDatabase();

  const items = [{
      name: "Ice Cream",
      purchased: false
    }, {
      name: "Waffles",
      purchased: false
    }, {
      name: "Snarks",
      purchased: true
    }, {
      name: "Bollie",
      purchased: false
    }];

    items.forEach((item) => {
      new GroceryItem(item).save();
    });
});