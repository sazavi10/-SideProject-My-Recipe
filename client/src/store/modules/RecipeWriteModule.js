import { createAction, handleActions } from 'redux-actions';

import { Map, List } from 'immutable';
import { pender } from 'redux-pender';

const INITIALIZE = 'RecipeWriteModule/INITIALIZE';
const CHANGE_INPUT = 'RecipeWriteModule/CHANGE_INPUT';
const CHANGE_MULTI_INPUT = 'RecipeWriteModule/CHANGE_MULTI_INPUT';
const ADD_MULTI_INPUT = 'RecipeWriteModule/ADD_MULTI_INPUT';
const DELETE_MULTI_INPUT = 'RecipeWriteModule/DELETE_MULTI_INPUT';

export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
export const changeMultiInput = createAction(CHANGE_MULTI_INPUT);
export const addMultiInput = createAction(ADD_MULTI_INPUT);
export const deleteMultiInput = createAction(DELETE_MULTI_INPUT);

const initialState = Map({
    id: null,
    recipeTitle: '',    /* com */
    recipeCoverImage: '', /* img? */
    recipeDescription: '',  /* com */
    ingredientList: List([
       Map({
        ingredient: '',
        detail: ''
        }),
    ]),
    recipeBody: List([
        Map({
         image: '', /* img? */
         text: ''
        }),
     ]),
    ingredient: '',     /* com */
    recipeType:'',      /* com */
    cusine:'',          /* com */
    specialDiet:'',     /* com */    
    difficulty : '',    /* com */
    cookingTime:'',     /* com */
    serving:'',         /* com */
    cookingTip : '',    /* com */
    writer: '',//none//
    profileImage: '',//none//
    profileIntro: '',//none//
    recipeLike:'',//none//
});

export default handleActions({
    [INITIALIZE]: (state, action) => initialState,
    [CHANGE_INPUT]: (state, action) => {
        const { name, value } = action.payload;
        return state.set(name, value);
    },
    [ADD_MULTI_INPUT]: (state, action) => {
        const { payload: targetName } = action;
        const addInput = state.get(targetName).push(
            targetName === 'ingredientList' ? 
            Map({ ingredient: '', detail: ''})
            : Map({ image: '', text: ''})
        );
        return state.set(targetName, addInput);
    },
    [CHANGE_MULTI_INPUT]: (state,action) => {
        const { name, value, index, targetName } = action.payload;
        const changeValue = state.get(targetName).setIn([index, name],value)
        return state.set(targetName, changeValue);
    },
    [DELETE_MULTI_INPUT]: (state,action) => {
        const { index, targetName } = action.payload;
        const deleteValue = state.get(targetName).delete(index)
        return state.set(targetName, deleteValue);
    }
},initialState);
