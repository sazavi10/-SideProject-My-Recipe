const mongoose = require('mongoose');

const { Schema } = mongoose;

const Recipe = new Schema({
    recipeTitle: String,
    recipeCoverImage: String,
    recipeDescription: String,
    ingredientList: [
        {    
            ingredient: String,
            detail: String
        }
    ],
    recipeBody: [
        {
            image: String ,
            text: String
        }
     ],
    ingredient: String,
    recipeType: String,
    cusine: String,
    specialDiet: String,
    difficulty : String,
    cookingTime: String,
    serving: String,
    cookingTip : String,
    recipeLike: Number,
    publisheDate: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Recipe', Recipe);