import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import RecipeListContainer from 'containers/RecipeListContainer';


const RecipeList = ({ match }) => {
    const { page = 1 } =  match.params;

    return(
        <PageTemplate>
            <RecipeListContainer page={parseInt(page, 10)}/>
        </PageTemplate>
    )
}

export default RecipeList;