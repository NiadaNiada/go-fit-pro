import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content, Link } from 'react-mdl';

class Home extends Component {
    render() {
        return (
            <div className="landing-layout">
                <Layout fixedHeader>
                    <Header transparent title="FIT">
                        <Navigation>
                            <Link to="/resume">Link</Link>
                            <Link to="/resume">Link</Link>
                            <Link to="/resume">Link</Link>
                            <Link to="/resume">Link</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Title">
                        <Navigation>
                            <Link to="/resume">Link</Link>
                            <Link to="/resume">Link</Link>
                            <Link to="/resume">Link</Link>
                            <Link to="/resume">Link</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                    </Content>
                </Layout>
            </div>

        )
    }
}

export default Home;