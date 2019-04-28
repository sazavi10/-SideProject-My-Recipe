import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import queryString from 'query-string';
import RecipeListContainer from 'containers/RecipeListContainer';


const RecipeList = ({ location, match }) => {
    const query = queryString.parse(location.search);
    const { q } = query;
    return(
        <PageTemplate>
            <RecipeListContainer/>
            <div>
              {q !== undefined?` 현재 검색어 : ${q}`: ''}
            </div>
        </PageTemplate>
    )
}

export default RecipeList;