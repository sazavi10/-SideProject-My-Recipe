import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import RecipeViewContailner from 'containers/RecipeViewContailner';

const RecipeView = ({match}) => {
const { id } = match.params;
    return(
        <PageTemplate>
            <RecipeViewContailner id={id}/>
        </PageTemplate>
    )
}

export default RecipeView;