import React from "react";
import LandingPage from "./LandingPage";
import Dashboard from './dashboard/Dashboard';
import Recipes from './recipes/Recipes'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import "../scss/main.scss";
import './App.css'
import Main from "./Main";
import Workout from "./Workout";
import Home from "./Home";
class App extends React.Component {
  render() {
    return (

      // <div className="landing-layout">
      //   <Layout fixedHeader>
      //     <Header transparent title="FIT">
      //       <Navigation>
      //         <Link to="/resume">Link</Link>
      //         <Link to="/resume">Link</Link>
      //         <Link to="/resume">Link</Link>
      //         <Link to="/resume">Link</Link>
      //       </Navigation>
      //     </Header>
      //     <Drawer title="Title">
      //       <Navigation>
      //         <Link to="/resume">Link</Link>
      //         <Link to="/resume">Link</Link>
      //         <Link to="/resume">Link</Link>
      //         <Link to="/resume">Link</Link>
      //       </Navigation>
      //     </Drawer>
      //     <Content>

      //     </Content>
      //   </Layout>
      // </div>
      <div className="demo-big-content">
        <div >
          <Layout fixedHeader style={{ backgroundColor: '#6A5D4C' }}>
            <Header transparent title="GO FIT-PRO"></Header>
            <Drawer title="GO FIT-PRO">
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

            {/* <div>
            <BrowserRouter>

              <Route path="/" exact component={LandingPage} />
              <Route path="/home" exact component={Home} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/recipes" exact component={Recipes} />
              <Route path="/workout" exact component={Workout} />


            </BrowserRouter>
          </div> */}
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
