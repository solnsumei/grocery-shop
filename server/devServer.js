import express from 'express';
import webpack from 'webpack';
import open from 'open';
import path from 'path';
import bodyParser from 'body-parser';
import config from '../webpack.config.dev';
import itemsRoute from './routes/items';
import './database';

const port = 8000;
// Set up the express app
const app = express();
const compiler = webpack(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

itemsRoute(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`)
  }
})