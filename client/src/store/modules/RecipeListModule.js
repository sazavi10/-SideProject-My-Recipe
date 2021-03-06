import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api'

export const INITIALIZE = 'RecipeListModule/INITIALIZE';
export const ONVISIBLE = 'RecipeListModule/ONVISIBLE';
export const ONSETFILTER = 'RecipeListModule/ONSETFILTER';
export const ONDELETEFILTER = 'RecipeListModule/ONDELETEFILTER';
export const GET_RECIPE_LIST = 'RecipeListModule/GET_RECIPE_LIST';

export const initialize = createAction(INITIALIZE);
export const onVisible = createAction(ONVISIBLE);
export const onSetFilter = createAction(ONSETFILTER);
export const onDeleteFilter = createAction(ONDELETEFILTER);
export const getRecipeList = createAction(GET_RECIPE_LIST, api.getRecipeList, meta => meta);

const initialState = Map({
        category: List([
            Map({
                id: 0,
                cateTitle : '주재료',
                cateName : 'ingredient',
                cateArray : [
                    '육류 요리',
                    '채소류 요리',
                    '해산물 요리',
                    '콩/두부 요리',
                    '과일 요리',
                    '달걀/유제품 요리',
                    '면/만두요리',
                    '김치요리',
                    '제철재료 요리',
                    '가공식품 요리'
                ],
                selected: false,
            }),
            Map({
                id: 1,
                cateTitle : '조리법',
                cateName : 'recipeType',
                cateArray : [
                    '밥요리',
                    '면요리',
                    '국물요리',
                    '찜/조림/구이요리',
                    '볶음/튀김/부침요리',
                    '나물/샐러드요리',
                    '김장/절임요리',
                    '베이킹/디저트요리',
                    '양념/소스/잼',
                    '음료/차/커피'
                ],
                selected: false,
            }),
            Map({
                id: 2,
                cateTitle : '나라별',
                cateName : 'cusine',
                cateArray : [
                    '한식 요리',
                    '중식 요리',
                    '일식 요리',
                    '동남아/인도 요리',
                    '멕시칸 요리',
                    '양식 요리',
                    '퓨전요리',
                    '이국적인맛'
                ],
                selected: false,
            }),
            Map({
                id: 3,
                cateTitle : '상황별',
                cateName : 'specialDiet',
                cateArray : [
                    '간식/야식',
                    '술안주',
                    '해장요리',
                    '손님 접대 요리',
                    '나들이 요리',
                    '파티/명절요리',
                    '실생활 요리'
                ],
                selected: false,
            }),
            Map({
                id: 4,
                cateTitle : '조리시간',
                cateName : 'cookingTime',
                cateArray : ['5분', '10분', '20분', '30분', '40분', '1시간', '1시간 이상'],
                selected: false,
            }),
            Map({    
                id: 5,
                cateTitle : '인원',
                cateName : 'serving',
                cateArray : ['1인분', '2인분', '3인분', '4인분', '5인분', '5인분 이상'],
                selected: false,
            }),
            Map({    
                id: 6,
                cateTitle : '난이도',
                cateName : 'difficulty',
                cateArray : ['쉬움', '중간', '어려움'],
                selected: false,
            }),
        ]),
        setFilter: Map({}),
        prevId:'',
        recipes: List(),
        lastPage: null
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
    },
    ...pender({
        type: GET_RECIPE_LIST,
        onSuccess: (state, action) => {
            const { data: recipes } = action.payload;
            const lastPage = action.payload.headers['last-page'];
            return state.set('recipes', fromJS(recipes)).set('lastPage', parseInt(lastPage,  10));
        }
    })
},initialState);
