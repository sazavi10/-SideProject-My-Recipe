import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender } from 'redux-pender';

export const INITIALIZE = 'RecipeListModule/INITIALIZE';
export const ONVISIBLE = 'RecipeListModule/ONVISIBLE';
export const ONSETFILTER = 'RecipeListModule/ONSETFILTER';
export const ONDELETEFILTER = 'RecipeListModule/ONDELETEFILTER';

export const initialize = createAction(INITIALIZE);
export const onVisible = createAction(ONVISIBLE);
export const onSetFilter = createAction(ONSETFILTER);
export const onDeleteFilter = createAction(ONDELETEFILTER);

const initialState = Map({
        category: List([
            Map({
                id: 0,
                cateTitle : '주재료',
                cateName : 'ingredient',
                cateArray : ['소고기', '닭고기', '돼지고기','오리고기','칠면조'],
                selected: false,
            }),
            Map({
                id: 1,
                cateTitle : '조리법',
                cateName : 'recipeType',
                cateArray : ['1Pot', '에어프라이어', '베이킹'],
                selected: false,
            }),
            Map({
                id: 2,
                cateTitle : 'Cusine',
                cateName : 'cusine',
                cateArray : ['아프리칸', '바스크', '카우보이'],
                selected: false,
            }),
            Map({
                id: 3,
                cateTitle : '특별식',
                cateName : 'specialDiet',
                cateArray : ['Dairy free', 'Paleo', 'Gluten Free'],
                selected: false,
            }),
            Map({
                id: 4,
                cateTitle : '조리시간',
                cateName : 'cookingTime',
                cateArray : ['5분미만', '10분미만', '20분미만'],
                selected: false,
            }),
            Map({    
                id: 5,
                cateTitle : '인원',
                cateName : 'serving',
                cateArray : ['1인분', '2인분', '3인분'],
                selected: false,
            }),
            Map({    
                id: 6,
                cateTitle : '난이도',
                cateName : 'difficulty',
                cateArray : ['쉬움', '중간', '어려움', '자격증필요'],
                selected: false,
            }),
        ]),
        setFilter: Map({}),
        prevId:'',
    })

export default handleActions({
    [INITIALIZE]: (state, action) => initialState,
    [ONVISIBLE]: (state, action) => {
        const { payload: id } = action;
        const prevId = state.get('prevId');
        const cate = state.get('category').updateIn([prevId, 'selected'], selected => !selected)
                    .updateIn([id, 'selected'], selected => !selected)
        return  state.set('category',cate).set('prevId',id)
    },
    [ONSETFILTER]: (state, action) => {
        const { id, childId } = action.payload;
        const cateKey = state.get('category').get(id).get('cateArray')[childId]
        const cateName = state.get('category').get(id).get('cateName')
        const setFilterArray = state.get('setFilter').delete(cateName).set(cateName,cateKey)
        return state.set('setFilter',setFilterArray)
            
    },
    [ONDELETEFILTER]: (state, action) => {
        const { payload: selectKey } = action;
        const setFilterArray = state.get('setFilter').delete(selectKey)
        return  state.set('setFilter',setFilterArray) 
    }
},initialState);
