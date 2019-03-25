import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import queryString from 'query-string';

const RecipeList = ({ location, match }) => {
    const query = queryString.parse(location.search);
    const { q, a, b, c } = query;
    return(
        <PageTemplate>
            <div>레시피 리스트
                {q}{a}{b}{c}
            </div>
        </PageTemplate>
    )
}

export default RecipeList;