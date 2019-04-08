import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import RecipeWriteContainer from 'containers/RecipeWriteContainer';

const footerType = true;

const RecipeWrite = () => {
    return(
        <PageTemplate footerType={footerType}>
            <RecipeWriteContainer/>
        </PageTemplate>
    )
}

export default RecipeWrite;