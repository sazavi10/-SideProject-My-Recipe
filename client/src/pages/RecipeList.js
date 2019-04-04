import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import queryString from 'query-string';
import RecipeItemList from 'components/RecipeList/RecipeItemList';
import RecipeCategory from 'containers/RecipeCategoryContainer';
import Pagination from 'components/common/Pagination';

const RecipeList = ({ location, match }) => {
    const query = queryString.parse(location.search);
    const { q } = query;
    return(
        <PageTemplate>
            <RecipeCategory/>
            <div>
              {q !== undefined?` 현재 검색어 : ${q}`: ''}
            </div>
            <RecipeItemList/>
            <Pagination page='1'/>
        </PageTemplate>
    )
}

export default RecipeList;