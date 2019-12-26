import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Account from './Account';
import Workout from './workout/Workout';
import MealPlan from './MealPlan';
import Recipes from './recipes/Recipes';
import LandingPage from './LandingPage';
import Dashboard from './dashboard/Dashboard';
import "../scss/main.scss";


const Main = () => (

    <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/" component={LandingPage} />
        <Route path="/account" component={Account} />
        <Route path="/workout" component={Workout} />
        <Route path="/mealplan" component={MealPlan} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/dashboard" component={Dashboard} />
    </Switch>

)

export default Main;
