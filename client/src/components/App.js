import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { RecipeMain, RecipeList, RecipeView, RecipeWrite } from 'pages';

const App = () => {
    return(
        <div>
            <Switch>
                <Route exact path='/' component={RecipeMain}/>
                <Route path='/recipelist/' component={RecipeList}/>
                <Route path='/recipeview/:id' component={RecipeView}/>
                <Route path='/recipewrite' component={RecipeWrite}/>                                                
            </Switch>
        </div>
    )
}

export default App;