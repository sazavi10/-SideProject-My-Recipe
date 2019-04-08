import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RecipeWriteWrapper from 'components/RecipeWrite/RecipeWriteWrapper';
import RecipeWriteForm from 'components/RecipeWrite/RecipeWriteForm';
import * as recipeWriteModule from 'store/modules/RecipeWriteModule';

class RecipeWriteContainer extends Component {
    handleChangeInput = ({ name, value }) => {
        const { RecipeWriteModule } = this.props;
        RecipeWriteModule.changeInput({ name,value });
    }

    handleAddMultiInput = (targetName) => {
        const { RecipeWriteModule } = this.props;
        RecipeWriteModule.addMultiInput(targetName)
    }

    handleChangeMultiInput = ({ name, value, index, targetName }) => {
        const { RecipeWriteModule } = this.props;
        RecipeWriteModule.changeMultiInput({ name, value, index, targetName })
    }
    

    handleDeleteMultiInput  = ({ index, targetName }) => {
        const { RecipeWriteModule } = this.props;
        RecipeWriteModule.deleteMultiInput({ index, targetName })
    }
    
    render(){
        const { recipeCoverImage, recipeTitle, recipeDescription, ingredientList, recipeBody, cookingTip, category } = this.props;
        const { handleChangeInput, handleAddMultiInput, handleChangeMultiInput, handleDeleteMultiInput } = this;
        return (
            <RecipeWriteWrapper>
                <RecipeWriteForm 
                    onChangeInput={handleChangeInput} 
                    addMultiInput={handleAddMultiInput} 
                    changeMultiInput={handleChangeMultiInput} 
                    deleteMultiInput={handleDeleteMultiInput}
                    ecipeCoverImage={recipeCoverImage} 
                    recipeTitle={recipeTitle} 
                    recipeDescription={recipeDescription} 
                    ingredientList={ingredientList}
                    recipeBody={recipeBody}
                    cookingTip={cookingTip} 
                    category={category}/>
                </RecipeWriteWrapper>
        )
    } 
}

export default connect(
    (state) => ({
        recipeCoverImage: state.RecipeWriteModule.get('recipeCoverImage'),
        recipeTitle: state.RecipeWriteModule.get('recipeTitle'),
        recipeDescription: state.RecipeWriteModule.get('recipeDescription'),
        cookingTip: state.RecipeWriteModule.get('cookingTip'),
        ingredientList: state.RecipeWriteModule.get('ingredientList'),
        recipeBody: state.RecipeWriteModule.get('recipeBody'),
        category: state.RecipeListModule.get('category'),
    }),
    (dispatch) => ({
        RecipeWriteModule: bindActionCreators(recipeWriteModule, dispatch)
    })
)(RecipeWriteContainer);