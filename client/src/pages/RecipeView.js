import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import RecipeViewLeft from 'components/RecipeView/RecipeViewLeft';
import RecipeViewRight from 'components/RecipeView/RecipeViewRight';
import RecipeViewWrapper from 'components/RecipeView/RecipeViewWrapper';

const RecipeView = ({match}) => {
const { id } = match.params;
    return(
        <PageTemplate>
            <RecipeViewWrapper>
                <RecipeViewLeft id = {id}/>
                <RecipeViewRight id = {id}/>
            </RecipeViewWrapper>
        </PageTemplate>
    )
}

export default RecipeView;