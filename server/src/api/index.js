const Router = require('koa-router');
const recipes = require('./recipes')
const file_upload = require('./file_upload')
const api = new Router();

api.use('/recipes', recipes.routes());
api.use('/file_upload', file_upload.routes());

module.exports = api;