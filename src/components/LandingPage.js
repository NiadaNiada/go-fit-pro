import React from "react";
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
    render() {
        return (
            <div id="pg1">
                <div className="darken-overlay">
                    <div className="pg-1">
                        <div className="head">
                            <div className="words">
                                <h1>Wellcome to Go Fit_PRO</h1>
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
            </div>
        );
    }
}
export default LandingPage;
