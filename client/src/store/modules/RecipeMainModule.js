import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api'

export const GET_RECIPE_LIST = 'RecipeMainModule/GET_RECIPE_LIST';
export const getRecipeList = createAction(GET_RECIPE_LIST, api.getRecipeList);

const initialState = Map({
    recipes: List(),
})

export default handleActions({
    ...pender({
        type: GET_RECIPE_LIST,
        onSuccess: (state, action) => {
            const { data: recipes } = action.payload;
            return state.set('recipes', fromJS(recipes))
        }
    })
},initialState);
