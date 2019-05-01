import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import RecipeMainContainer from 'containers/RecipeMainContainer';

const RecipeMain = ({match}) => {
    const { page = 1 } =  match.params;
    return(
        <PageTemplate>
            <RecipeMainContainer page={parseInt(page, 10)}/>
        </PageTemplate>
    )
}

export default RecipeMain;