import axios from 'axios';
import queryString from 'query-string';

export const writeRecipe = ({ recipeTitle, recipeCoverImage, recipeDescription, ingredientList, recipeBody, 
    ingredient, recipeType, cusine, specialDiet, difficulty, cookingTime, serving, 
    cookingTip, recipeLike }) => axios.post('/api/recipes', 
    { recipeTitle, recipeCoverImage, recipeDescription, ingredientList, recipeBody, 
        ingredient, recipeType, cusine, specialDiet, difficulty, cookingTime, serving, 
        cookingTip, recipeLike });
export const writeRecipeImg = (formData, config) => axios.post('/api/file_upload', formData, config);
export const getRecipe = (id) => axios.get(`/api/recipes/${id}`);
export const getRecipeList = ({page}) => axios.get(`/api/recipes/?${queryString.stringify({page})}`);
export const addRecipeLike = (id, {recipeLike}) => axios.patch(`/api/recipes/like/${id}`, { recipeLike });


