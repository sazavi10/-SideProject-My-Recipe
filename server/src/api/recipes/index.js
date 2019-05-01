const Router = require('koa-router');
const recipeCtrl = require('./recipe.ctrl');
const recipes = new Router();

recipes.get('/', recipeCtrl.list)
recipes.post('/', recipeCtrl.write)
recipes.get('/:id', recipeCtrl.read)
recipes.delete('/:id', recipeCtrl.remove)
recipes.patch('/like/:id', recipeCtrl.updateLike)

module.exports = recipes;