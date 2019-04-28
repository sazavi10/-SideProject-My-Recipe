import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
<<<<<<< HEAD
import RecipeViewLeft from 'components/RecipeView/RecipeViewLeft';
import RecipeViewRight from 'components/RecipeView/RecipeViewRight';
import RecipeViewWrapper from 'components/RecipeView/RecipeViewWrapper';
=======
import RecipeViewContailner from 'containers/RecipeViewContailner';
>>>>>>> Server&Db set end! write&view end - img upload ing

const RecipeView = ({match}) => {
const { id } = match.params;
    return(
        <PageTemplate>
<<<<<<< HEAD
            <RecipeViewWrapper>
                <RecipeViewLeft id = {id}/>
                <RecipeViewRight id = {id}/>
            </RecipeViewWrapper>
=======
            <RecipeViewContailner id={id}/>
>>>>>>> Server&Db set end! write&view end - img upload ing
        </PageTemplate>
    )
}

export default RecipeView;