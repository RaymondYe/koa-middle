const Koa = require('koa');
const path = require('path');
const router = require('koa-router')();
const json = require('koa-json');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser')();
const koaStatic = require('koa-static');
const proxy = require('koa-better-http-proxy');
const app = new Koa();
const staticPath = './view'
const prot = 8889;

app.use(json());
app.use(logger());

app.on('error', function(err, ctx){
  console.log('server error', err);
});

app.use(koaStatic(path.join( __dirname,  staticPath), {
	extensions: ['.html']
}));

app.use(proxy('https://www.v2ex.com'));

app.listen(prot,() => {
  console.log(`Koa is listening in ${prot}`);
});