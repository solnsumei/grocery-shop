import GroceryItem from '../models/GroceryItem';

const itemsRoute = (app) => {
  app.route('/api/items')
    .get((req, res) => {
      GroceryItem.find((error, data) =>
      res.send(data));
    })
    .post((req, res) => {
      const item = req.body;
      const groceryItem = GroceryItem(item);
      groceryItem.save((error, data) => {
        res.status(201).send(data);
      })
    });

  app.route('/api/items/:id')
    .delete((req, res) => {
      GroceryItem.deleteOne({
        _id: req.params.id
      }, (err) => {
        res.send();
      });
    })
    .patch((req, res) => {
      GroceryItem.findOne({
        _id: req.body._id
      }, (error, doc) => {
        for (var key in req.body) {
          doc[key] = req.body[key];
        }

        doc.save();
        res.status(200).send();
      })
    });
}

export default itemsRoute;
