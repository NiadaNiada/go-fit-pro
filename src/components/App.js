import React from "react";
import LandingPage from "./LandingPage";
import Dashboard from './dashboard/Dashboard';
import Recipes from './Recipes/Recipes'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import "../scss/main.scss";
// import './App.css'
import Main from "./Main";
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>

          <Route path="/" exact component={LandingPage} />
          <Route path="/dashboard" exact component={Dashboard} />
          {/* <Route path="/recipes" exact component={Recipes} /> */}
          {/* <Route path="/login" exact component={Login} /> */}

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
