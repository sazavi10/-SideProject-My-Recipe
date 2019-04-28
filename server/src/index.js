require('dotenv').config();

const koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const mount  = require('koa-mount');
const bodyParser = require('koa-bodyparser');

const mongoose = require('mongoose');
const api = require('./api');

const {
    PORT: port = 27017,
    MONGO_URI: mongoURI
} = process.env;

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, { useNewUrlParser: true })
.then(() => console.log('connected to mongodb'))
.catch(e => console.error(e));

const app = new koa();
const router = new Router();
//const upload = multer({dest: './upload'})

router.use('/api', api.routes());

app.use(mount( '/image', serve('./upload')));
//app.use(mount( '/image/recipe_cover', serve('./upload/recipe_cover')));
//app.use(mount( '/image/cooking_step', serve('./upload/cooking_step')));

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log('listening to port 4000');
});