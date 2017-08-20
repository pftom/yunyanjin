const Koa = require('koa');
const app = new Koa();

const views = require('co-views');

const render = views(__dirname + '/views', {
  ext: 'ejs',
});

const user = {
      name: {
        first: 'Tobi',
        last: 'Holowaychuk'
      },
      species: 'ferret',
      age: 3
    };

const main = async ctx => {
  ctx.body = await render('user', { user: user });
};

app.use(main);

app.listen(3000);