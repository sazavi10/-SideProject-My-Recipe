import { createAction, handleActions } from 'redux-actions';

import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

const GET_RECIPE = 'RecipeViewModule/GET_RECIPE';
const ADD_RECIPE_LIKE = 'RecipeViewModule/ADD_RECIPE_LIKE';

export const getRecipe = createAction(GET_RECIPE, api.getRecipe);
export const addRecipeLike = createAction(ADD_RECIPE_LIKE, api.addRecipeLike);

const initialState = Map({
    recipe: Map({})
});

export default handleActions({
    ...pender({
        type: GET_RECIPE,
        onSuccess: (state, action) => {
            const { data: recipe } = action.payload;
            return state.set('recipe', fromJS(recipe));
        }
    }),
    ...pender({
        type: ADD_RECIPE_LIKE,
    })
},initialState);
