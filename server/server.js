import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import itemsRoute from './routes/items';
import './database';

const port = parseInt(process.env.PORT, 10) || 8000;
// Set up the express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

itemsRoute(app);

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port);

export default app;