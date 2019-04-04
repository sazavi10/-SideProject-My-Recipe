import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import RecipeViewWrapper from 'components/RecipeView/RecipeViewWrapper';

const RecipeView = ({match}) => {
const { id } = match.params;
 return(
        <PageTemplate>
            <RecipeViewWrapper id = {id}/>
        </PageTemplate>
    )
}

export default RecipeView;