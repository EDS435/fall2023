import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import UserProfile from './components/UserProfile';
import Forum from './components/Forum';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recipes" exact component={RecipeList} />
        <Route path="/recipes/:id" component={RecipeDetails} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/forum" component={Forum} />
        <Route path="/shopping-list" component={ShoppingList} />
      </Switch>
    </Router>
  );
}
