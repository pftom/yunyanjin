const views = require('co-views');
const route = require('koa-route');
const serve = require('koa-static');

const fs = require('fs');
const path = require('path');

const Koa = require('koa');
const app = new Koa();

const render = views(__dirname + '/views', {
  map: { html: 'ejs' }
});


const main = async ctx => {
  ctx.response.body = await render('index');
};

const shop = async ctx => {
  ctx.response.body = await render('shop');
};

const assets = serve(path.join(__dirname));

app.use(assets);
app.use(route.get('/', main));
app.use(route.get('/shop', shop));


app.listen(3000);