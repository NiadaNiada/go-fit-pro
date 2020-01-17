import React from "react";
import { Link } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import "../scss/main.scss";
import Main from "./Main";
import Footer from "./Footer";


class App extends React.Component {
  render() {
    return (
      <div>

        <Layout fixedHeader className="demo-big-content">

          <Header className="nav-bar" transparent title="GO FIT_PRO" style={{ color: "white" }} >
            <i className="fab fa-gripfire"></i>
            <Navigation >

              <Link to="/home">Home</Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/workout">Workout</Link>
              <Link to="/recipes">Recipes</Link>
            </Navigation>
          </Header>
          <Drawer title="GO FIT_PRO" style={{ color: "black" }}>

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
            <Footer />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
