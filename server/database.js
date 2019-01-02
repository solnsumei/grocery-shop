import mongoose from 'mongoose';
import dbConfig from './config';
import GroceryItem from './models/GroceryItem';

const env = process.env.NODE_ENV || 'development';

const databaseURL = process.env.DATABASE_URL || dbConfig[env].dbUrl;

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