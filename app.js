
import route from 'koa-route';
import serve from 'koa-static';
import koaBody from 'koa-body';
import logger from 'koa-logger';
import Koa from 'koa';
import mongoose from 'mongoose';

import path from 'path';

import Products from './models/product';
import { getProducts, getProduct, postProduct, deleteProduct } from './routes/product';

const app = new Koa();
const assets = serve(path.join(__dirname));


const port = process.env.PORT || 8080;

const options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
}; // Just a bunch of options for the db connection
mongoose.Promise = global.Promise;
// Don't forget to substitute it with your connection string
mongoose.connect('mongodb://127.0.0.1:27017/yunyanjin', options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

app.use()
app.use(koaBody());
app.use(assets);
app.use(logger());


app.use(route.get('/shop/products/', getProducts));
app.use(route.get('/shop/products/:id/', getProduct));
app.use(route.post('/shop/products/', postProduct));
app.use(route.delete('/shop/products/:id/', deleteProduct));


app.listen(port);
console.log('App is listening on port 8080....');