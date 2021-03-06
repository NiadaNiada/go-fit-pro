import React from "react";

import { Link } from "react-router-dom";
import "./landing-page.css";
import { Navigation, Layout, Header, Drawer, Content } from 'react-mdl';

class LandingPage extends React.Component {
    render() {
        return (
            <div id="pg1">
                <div className="darken-overlay">
                    <div className="pg-1">
                        <div className="head">
                            <div className="words">
                                <h1>Calorie Counter</h1>
                                <h3>Take You're First Steps To A Healthy Life</h3>
                                <div className="section">
                                    <Link to="/dashboard">
                                        <div className="button">Get Started</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="foot">Copyright © 2019. All Rights Reservered</div>
                </footer>
            </div>
        );
    }
}
export default LandingPage;
