import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RecipeWriteWrapper from 'components/RecipeWrite/RecipeWriteWrapper';
import RecipeWriteForm from 'components/RecipeWrite/RecipeWriteForm';
<<<<<<< HEAD
import * as recipeWriteModule from 'store/modules/RecipeWriteModule';

class RecipeWriteContainer extends Component {
=======
import { withRouter } from 'react-router-dom';
import * as recipeWriteModule from 'store/modules/RecipeWriteModule';

class RecipeWriteContainer extends Component {
    state = { }
    componentDidMount() {
        const { RecipeWriteModule } = this.props;
        RecipeWriteModule.initialize();
    }

>>>>>>> Server&Db set end! write&view end - img upload ing
    handleChangeInput = ({ name, value }) => {
        const { RecipeWriteModule } = this.props;
        RecipeWriteModule.changeInput({ name,value });
    }

<<<<<<< HEAD
=======
    handleFileChange = (stateName, stateFile) => {
        this.setState({
            [stateName]: stateFile
        })
    }

>>>>>>> Server&Db set end! write&view end - img upload ing
    handleAddMultiInput = (targetName) => {
        const { RecipeWriteModule } = this.props;
        RecipeWriteModule.addMultiInput(targetName)
    }

    handleChangeMultiInput = ({ name, value, index, targetName }) => {
        const { RecipeWriteModule } = this.props;
        RecipeWriteModule.changeMultiInput({ name, value, index, targetName })
    }
<<<<<<< HEAD
    

    handleDeleteMultiInput  = ({ index, targetName }) => {
        const { RecipeWriteModule } = this.props;
        RecipeWriteModule.deleteMultiInput({ index, targetName })
    }
    
    render(){
        const { recipeCoverImage, recipeTitle, recipeDescription, ingredientList, recipeBody, cookingTip, category } = this.props;
        const { handleChangeInput, handleAddMultiInput, handleChangeMultiInput, handleDeleteMultiInput } = this;
=======

    handleChangeImageInput = ({ file, fileName, index }) => {
        const { RecipeWriteModule } = this.props;
        RecipeWriteModule.changeImageInput({ file, fileName, index })
    }

    handleDeleteMultiInput  = ({ index, targetName }) => {
        const { RecipeWriteModule, recipeBody } = this.props;
        RecipeWriteModule.deleteMultiInput({ index, targetName })
        const imgName = 'recipeBody'
        if ( targetName === imgName ) {
                for (let i = index ; i < recipeBody.size-1 ; i++ ) {
                this.setState({
                    [imgName+i]:this.state[imgName+(i+1)]
                })
                this.setState({[imgName+(recipeBody.size-1)]:null})
            }
        }
    }

    handleSubmit = async() => {
        const { RecipeWriteModule, recipeTitle, recipeCoverImage, recipeDescription, ingredientList, recipeBody, 
            ingredient, recipeType, cusine, specialDiet, difficulty, cookingTime, serving, 
            cookingTip, recipeLike, history } = this.props;
        const formData = new FormData();
        formData.append('files', this.state.recipeCoverImage);
        for (let i=0 ; i < recipeBody.size ; i++) {
            formData.append('files', this.state['recipeBody'+i]);
            console.log(this.state['recipeBody'+i])
        }
        const config = {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        }

        const recipe = {
            recipeTitle, 
            recipeCoverImage, 
            recipeDescription, 
            ingredientList, 
            recipeBody, 
            ingredient, 
            recipeType, 
            cusine, 
            specialDiet, 
            difficulty, 
            cookingTime, 
            serving, 
            cookingTip, 
            recipeLike
        };

        try {
            await RecipeWriteModule.writeRecipe(recipe);
            formData.append('id', this.props.recipeId);
            const recipeId = this.props.recipeId;
            await RecipeWriteModule.writeRecipeImg(formData, config);
            RecipeWriteModule.initialize();
            history.push(`/recipeview/${recipeId}`)
        } catch (e) {
            console.log(e)
        }
    }
    
    render(){
        const { recipeCoverImage, recipeTitle, recipeDescription, ingredientList, recipeBody, cookingTip, category, uploadImgArray} = this.props;
        const { handleChangeInput, handleAddMultiInput, handleChangeMultiInput, handleDeleteMultiInput, handleSubmit, handleChangeImageInput, handleFileChange} = this;
>>>>>>> Server&Db set end! write&view end - img upload ing
        return (
            <RecipeWriteWrapper>
                <RecipeWriteForm 
                    onChangeInput={handleChangeInput} 
<<<<<<< HEAD
                    addMultiInput={handleAddMultiInput} 
                    changeMultiInput={handleChangeMultiInput} 
                    deleteMultiInput={handleDeleteMultiInput}
                    ecipeCoverImage={recipeCoverImage} 
=======
                    onChangeImageInput={handleChangeImageInput}
                    addMultiInput={handleAddMultiInput} 
                    changeMultiInput={handleChangeMultiInput} 
                    deleteMultiInput={handleDeleteMultiInput}
                    handleSubmit={handleSubmit}
                    recipeCoverImage={recipeCoverImage} 
>>>>>>> Server&Db set end! write&view end - img upload ing
                    recipeTitle={recipeTitle} 
                    recipeDescription={recipeDescription} 
                    ingredientList={ingredientList}
                    recipeBody={recipeBody}
                    cookingTip={cookingTip} 
<<<<<<< HEAD
                    category={category}/>
=======
                    category={category}
                    uploadImgArray={uploadImgArray}
                    handleFileChange={handleFileChange}
                    />
>>>>>>> Server&Db set end! write&view end - img upload ing
                </RecipeWriteWrapper>
        )
    } 
}

export default connect(
    (state) => ({
<<<<<<< HEAD
        recipeCoverImage: state.RecipeWriteModule.get('recipeCoverImage'),
        recipeTitle: state.RecipeWriteModule.get('recipeTitle'),
        recipeDescription: state.RecipeWriteModule.get('recipeDescription'),
        cookingTip: state.RecipeWriteModule.get('cookingTip'),
        ingredientList: state.RecipeWriteModule.get('ingredientList'),
        recipeBody: state.RecipeWriteModule.get('recipeBody'),
        category: state.RecipeListModule.get('category'),
=======
        category: state.RecipeListModule.get('category'),
        recipeCoverImage: state.RecipeWriteModule.get('recipeCoverImage'),
        recipeTitle: state.RecipeWriteModule.get('recipeTitle'),
        recipeDescription: state.RecipeWriteModule.get('recipeDescription'),
        ingredientList: state.RecipeWriteModule.get('ingredientList'),
        recipeBody: state.RecipeWriteModule.get('recipeBody'),
        cookingTip: state.RecipeWriteModule.get('cookingTip'),
        ingredient: state.RecipeWriteModule.get('ingredient'),
        recipeType: state.RecipeWriteModule.get('recipeType'), 
        cusine: state.RecipeWriteModule.get('cusine'), 
        specialDiet: state.RecipeWriteModule.get('specialDiet'), 
        difficulty: state.RecipeWriteModule.get('difficulty'), 
        cookingTime: state.RecipeWriteModule.get('cookingTime'), 
        serving: state.RecipeWriteModule.get('serving'),
        recipeLike: state.RecipeWriteModule.get('recipeLike'),
        recipeId: state.RecipeWriteModule.get('recipeId'),
        uploadImgArray: state.RecipeWriteModule.get('uploadImgArray')
>>>>>>> Server&Db set end! write&view end - img upload ing
    }),
    (dispatch) => ({
        RecipeWriteModule: bindActionCreators(recipeWriteModule, dispatch)
    })
<<<<<<< HEAD
)(RecipeWriteContainer);
=======
)(withRouter(RecipeWriteContainer));
>>>>>>> Server&Db set end! write&view end - img upload ing
