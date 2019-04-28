const Recipe = require('models/recipe');

exports.write = async (ctx) => {
    const { recipeTitle, recipeCoverImage, recipeDescription, ingredientList, recipeBody, 
            ingredient, recipeType, cusine, specialDiet, difficulty, cookingTime, serving, 
            cookingTip, recipeLike } = ctx.request.body;
    const recipe = new Recipe({
        recipeTitle, recipeCoverImage, recipeDescription, ingredientList, recipeBody, 
        ingredient, recipeType, cusine, specialDiet, difficulty, cookingTime, serving, 
        cookingTip, recipeLike
    });
    try {
        await recipe.save();
        ctx.body = recipe;
    } catch(e) {
        ctx.throw(e, 500);
    }
};
exports.list = async (ctx) => {
    try {
        const recipes = await Recipe.find()
        .sort({ _id: -1 }).limit(12).exec();
        ctx.body = recipes;
    } catch (e) {
        ctx.throw(e, 500);
    }
};

exports.read = async (ctx) => {
    const { id } = ctx.params;
    try {
        const recipe = await Recipe.findById(id).exec();
        if(!recipe){
            ctx.status = 404;
            return;
        }
        ctx.body = recipe
    } catch (e) {
        ctx.throw(e, 500);
    }
};

exports.remove = (ctx) => {
};

exports.update = (ctx) => {
};
