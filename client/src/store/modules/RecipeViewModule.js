import { createAction, handleActions } from 'redux-actions';

import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

const GET_RECIPE = 'RecipeViewModule/GET_RECIPE';

export const getRecipe = createAction(GET_RECIPE, api.getRecipe);

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
    })
},initialState);
