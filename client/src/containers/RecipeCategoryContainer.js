import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RecipeCategory from 'components/RecipeList/RecipeCategory'
import * as recipeListModule from 'store/modules/RecipeListModule';

class RecipeCategoryContainer extends Component {
    componentDidMount() {
        const { RecipeListModule } = this.props;
        RecipeListModule.initialize();
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
        const { category, setFilter } = this.props;
        
        return (
            <RecipeCategory onVisible={handleVisible} category={category} setFilter={setFilter} onSetFilter={handleSetFilter} onDeleteFilter={hadleDeleteFilter}/>
        );
    }
}

export default connect(
    (state) => ({
        category: state.RecipeListModule.get('category'),
        setFilter: state.RecipeListModule.get('setFilter')
    }),
    (dispatch) => ({
        RecipeListModule: bindActionCreators(recipeListModule, dispatch)
    })
)(RecipeCategoryContainer);