import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RecipeItemList from 'components/RecipeList/RecipeItemList';
import Pagination from 'components/common/Pagination';
import RecipeCategory from 'components/RecipeList/RecipeCategory'
import * as recipeListModule from 'store/modules/RecipeListModule';

class RecipeListContainer extends Component {
    getRecipeList = () => {
        const { page, RecipeListModule } = this.props;
        RecipeListModule.getRecipeList({page});
    }
    componentDidMount() {
        const { RecipeListModule } = this.props;
        RecipeListModule.initialize();
        this.getRecipeList();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.page !== this.props.page){
            this.getRecipeList();
            document.documentElement.scrollTop = 0;
        }
    }

    handleVisible = (id) => {
        const { RecipeListModule } = this.props;
        RecipeListModule.onVisible(id)
    }

    handleSetFilter = (id, childId ) => {
        const { RecipeListModule } = this.props;
        RecipeListModule.onSetFilter(id, childId)
    }

    hadleDeleteFilter = ( selectKey ) => {
        const { RecipeListModule } = this.props;
        RecipeListModule.onDeleteFilter(selectKey)
    }

    render() {
        const { handleVisible, handleSetFilter, hadleDeleteFilter } =  this;
        const { category, setFilter, recipes, page, lastPage, loading } = this.props;
        if(loading) return null;
        return (
            <div>
                <RecipeCategory onVisible={handleVisible} category={category} setFilter={setFilter} onSetFilter={handleSetFilter} onDeleteFilter={hadleDeleteFilter}/>
                <RecipeItemList recipes={recipes}/>
                <Pagination page = {page} lastPage = {lastPage}/>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        category: state.RecipeListModule.get('category'),
        setFilter: state.RecipeListModule.get('setFilter'),
        recipes: state.RecipeListModule.get('recipes'),
        lastPage: state.RecipeListModule.get('lastPage'),
        loading: state.pender.pending['RecipeListModule/GET_RECIPE_LIST']
    }),
    (dispatch) => ({
        RecipeListModule: bindActionCreators(recipeListModule, dispatch)
    })
)(RecipeListContainer);