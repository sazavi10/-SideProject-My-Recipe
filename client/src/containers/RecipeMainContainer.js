import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RecipeMainWrapper from 'components/RecipeMain/RecipeMainWrapper';
import RecipeItemList from 'components/RecipeList/RecipeItemList';
import ImageSlider from 'components/ImageSlider';
import * as recipeMainModule from 'store/modules/RecipeMainModule';

class RecipeMainContainer extends Component {
    getRecipeList = () => {
        console.log('a')
        const { RecipeMainModule } = this.props;
        RecipeMainModule.getRecipeList();
    }

    componentDidMount() {
        this.getRecipeList();
    }

    render() {
        const { recipes } = this.props;
        return (
            <div>
                <RecipeMainWrapper>
                    <ImageSlider/>
                    {/*<div className={cx('title_area')}>
                        <h2>오늘의 레시피~</h2>
                        <span><Link to='/recipelist'>전체 보기</Link></span>
                    </div>*/}
                    <RecipeItemList recipes={recipes}/>
                </RecipeMainWrapper>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        recipes: state.RecipeMainModule.get('recipes')
    }),
    (dispatch) => ({
        RecipeMainModule: bindActionCreators(recipeMainModule, dispatch)
    })
)(RecipeMainContainer);