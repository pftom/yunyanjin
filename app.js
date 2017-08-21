const views = require('co-views');
const route = require('koa-route');

const Koa = require('koa');
const app = new Koa();

const render = views('views', {
  ext: 'ejs',
});


app.use(route.get('/'), main);
app.use(route.get())

app.listen(3000);