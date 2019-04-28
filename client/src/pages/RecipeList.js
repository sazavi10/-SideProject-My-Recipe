import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import queryString from 'query-string';
<<<<<<< HEAD
import RecipeItemList from 'components/RecipeList/RecipeItemList';
import RecipeCategory from 'containers/RecipeCategoryContainer';
import Pagination from 'components/common/Pagination';
=======
import RecipeListContainer from 'containers/RecipeListContainer';

>>>>>>> Server&Db set end! write&view end - img upload ing

const RecipeList = ({ location, match }) => {
    const query = queryString.parse(location.search);
    const { q } = query;
    return(
        <PageTemplate>
<<<<<<< HEAD
            <RecipeCategory/>
            <div>
              {q !== undefined?` 현재 검색어 : ${q}`: ''}
            </div>
            <RecipeItemList/>
            <Pagination page='1'/>
=======
            <RecipeListContainer/>
            <div>
              {q !== undefined?` 현재 검색어 : ${q}`: ''}
            </div>
>>>>>>> Server&Db set end! write&view end - img upload ing
        </PageTemplate>
    )
}

export default RecipeList;