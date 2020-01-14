import React from "react";
import ReactDOM from 'react-mdl';
import LandingPage from "./LandingPage";
import Dashboard from './dashboard/Dashboard';
import Recipes from './recipes/Recipes'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import "../scss/main.scss";
import Main from "./Main";

class App extends React.Component {

  render() {
    return (
      <div >
        <div>
          <Layout fixedHeader className="demo-big-content">

            <Header className="nav-bar" transparent title="GO FIT_PRO" style={{ color: "white" }} >
              {/* <div className="logo">
              <img clasName="logo-img" src={require('../img/logo1.png')} alt="logo" style={{ right: "100px", position: 'sticky', border: "2px solid #4CAF50" }} />
            </div> */}
              <Navigation >
                <Link to="/home">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/workout">Workout</Link>
                <Link to="/recipes">Recipes</Link>
              </Navigation>
            </Header>
            <Drawer title="GO FIT-PRO" style={{ color: "black" }}>
              <Navigation >
                <Link to="/home">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/workout">Workout</Link>
                <Link to="/recipes">Recipes</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </div>

    );
  }
}

export default App;
