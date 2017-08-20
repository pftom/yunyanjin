//create http server and create koa application
const Koa = require('koa');
const app = new Koa();

//render html or templates
const views = require('co-views');

//logger http response
const logger = require('koa-logger');
//parse http body data
const koaBody = require('koa-body');

//cache static files for project
const staticCache = require('koa-static-cache');
//handler error in one place thanks to the koa design philosophy
const errorHandler = require('koa-errorhandler');
// database session middleware
const session = require('koa-generic-session');
// up middleware extend for mongodb
const MongoStore = require('koa-generic-session-mongo');
//flash message in in window
const flash = require('koa-flash');
//compress data for optimization
const compress = require('koa-compress');
//scheme for validate request data
const scheme = require('koa-scheme');
//router use the path of file 
const router = require('koa-frouter');
//auto-search for config file and switch dev|pro env for project
const config = require('config-lite');

//merge the getter/setter prop
const merge = require('merge-descriptors');

//import core js file
const core = require('./lib/core');
//import render config
const renderConf = require(config.renderConf);


//merge local config and core config
merge(renderConf.locals || {}, core, false);
//identify the app use keys(package.json > name)
app.keys = [renderConf.locals.$app.name];



//a lot of middleware apply = =!
app.use(errorHandler());
app.use(koaBody());
app.use(staticCache(config.staticCacheConf));
app.use(logger());

//store session in mongodb store
app.use(session({
  store: new MongoStore(config.mongodb),
}));
//flash must use after session middleware
app.use(flash());

app.use(scheme(config.schemeConf));
// deprecated in koa@v2
// app.use(routerCache(app, config.routerCacheConf))
app.use(compress());

//add render view middleware for koa
const render = views(__dirname + '/views', {
  ext: 'ejs',
});
app.use(render);

app.use(router(app, config.routerConf));

app.listen(3000, function () {
  console.log('Server listening on: ', config.port);
});;