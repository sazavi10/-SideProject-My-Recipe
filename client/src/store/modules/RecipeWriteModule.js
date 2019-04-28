import { createAction, handleActions } from 'redux-actions';
<<<<<<< HEAD
=======
import * as api from 'lib/api';
>>>>>>> Server&Db set end! write&view end - img upload ing

import { Map, List } from 'immutable';
import { pender } from 'redux-pender';

const INITIALIZE = 'RecipeWriteModule/INITIALIZE';
const CHANGE_INPUT = 'RecipeWriteModule/CHANGE_INPUT';
const CHANGE_MULTI_INPUT = 'RecipeWriteModule/CHANGE_MULTI_INPUT';
const ADD_MULTI_INPUT = 'RecipeWriteModule/ADD_MULTI_INPUT';
const DELETE_MULTI_INPUT = 'RecipeWriteModule/DELETE_MULTI_INPUT';
<<<<<<< HEAD
=======
const WRITE_RECIPE = 'RecipeWriteModule/WRITE_RECIPE';
const WRITE_RECIPEIMG = 'RecipeWriteModule/WRITE_RECIPEIMG';
const CHANGE_IMAGE_INPUT = 'RecipeWriteModule/CHANGE_IMAGE_INPUT';
>>>>>>> Server&Db set end! write&view end - img upload ing

export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
export const changeMultiInput = createAction(CHANGE_MULTI_INPUT);
export const addMultiInput = createAction(ADD_MULTI_INPUT);
export const deleteMultiInput = createAction(DELETE_MULTI_INPUT);
<<<<<<< HEAD

const initialState = Map({
    id: null,
=======
export const changeImageInput = createAction(CHANGE_IMAGE_INPUT);
export const writeRecipe = createAction(WRITE_RECIPE, api.writeRecipe);
export const writeRecipeImg = createAction(WRITE_RECIPEIMG, api.writeRecipeImg);


const initialState = Map({
    recipeId: null,
>>>>>>> Server&Db set end! write&view end - img upload ing
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
<<<<<<< HEAD
    difficulty : '',    /* com */
    cookingTime:'',     /* com */
    serving:'',         /* com */
    cookingTip : '',    /* com */
    writer: '',//none//
    profileImage: '',//none//
    profileIntro: '',//none//
    recipeLike:'',//none//
=======
    cookingTime:'',     /* com */
    serving:'',         /* com */
    cookingTip : '',    /* com */
    difficulty : '',    /* com */
    recipeLike:'0',//none//
    /*writer: '',//none//
    profileImage: '',//none//
    profileIntro: '',//none//*/
    uploadImgArray: List([
        Map({
         file: '',
         fileName: ''
        }),
        Map({
            file: '',
            fileName: ''
        }),
     ]),
>>>>>>> Server&Db set end! write&view end - img upload ing
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
<<<<<<< HEAD
        return state.set(targetName, addInput);
=======
        const addImage = state.get('uploadImgArray').push(Map({ file: '', fileName: ''}));
        let result;
        if( targetName === 'ingredientList' ) {
            result =  state.set(targetName, addInput)
        } else {
            result =  state.set(targetName, addInput).set('uploadImgArray', addImage);
        }    
        return result;
>>>>>>> Server&Db set end! write&view end - img upload ing
    },
    [CHANGE_MULTI_INPUT]: (state,action) => {
        const { name, value, index, targetName } = action.payload;
        const changeValue = state.get(targetName).setIn([index, name],value)
        return state.set(targetName, changeValue);
    },
    [DELETE_MULTI_INPUT]: (state,action) => {
        const { index, targetName } = action.payload;
        const deleteValue = state.get(targetName).delete(index)
<<<<<<< HEAD
        return state.set(targetName, deleteValue);
    }
=======
        const delImage = state.get('uploadImgArray').delete(index+1)
        let result;
        if( targetName === 'ingredientList' ) {
            result =  state.set(targetName, deleteValue);
        } else {
            result =  state.set(targetName, deleteValue).set('uploadImgArray', delImage);
        }
        return result;
    },
    [CHANGE_IMAGE_INPUT]: (state,action) => {
        const { file, fileName, index } = action.payload;
        const changeValue = state.get('uploadImgArray').setIn([index, 'file'],file).setIn([index, 'fileName'],fileName);
        return state.set('uploadImgArray', changeValue);
    },
    ...pender({
        type: WRITE_RECIPE,
        onSuccess: (state, action) => {
            const { _id } = action.payload.data;
            return state.set('recipeId', _id);
        }
    }),
    
>>>>>>> Server&Db set end! write&view end - img upload ing
},initialState);
