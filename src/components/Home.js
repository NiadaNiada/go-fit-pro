import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content, Link } from 'react-mdl';

class Home extends Component {
    render() {
        return (
            <div className="home-page">
             
                    <h1>Wellcome to Go FIT_PRO</h1>
                    <section id="pg-2">
                        <div className="welcomeImg" />

                        <div className="welcome-img-text">
                            {/* <div className="label-eats">HEALTHY EATS +</div>
                            <div className="label-workout">WORKOUT ROUTINE</div> */}
                        </div>
                    </section>
                    <div className="welcome-card">

                        <h2>Food Tracking Made Easy</h2>
                        <h4>Switching to a healthy diet doesn’t have to be an all or nothing proposition. You don’t have to be perfect, you don’t have to completely eliminate foods you enjoy, and you don’t have to change everything all at once—that usually only leads to cheating or giving up on your new eating plan.
    
    A better approach is to make a few small changes at a time. Keeping your goals modest can help you achieve more in the long term without feeling deprived or overwhelmed by a major diet overhaul. Think of planning a healthy diet as a number of small, manageable steps—like adding a salad to your diet once a day. As your small changes become habit, you can continue to add more healthy choices.</h4>
                    </div>

                    <section id="pg-3">
                        <div className="title">
                            <h2>Getting Started Is Easy</h2>
                        </div>
                        <div className="card-container">
                            <div className="card">
                                <i className="fas fa-calculator" />
                                <div className="content-card">
                                    <h3>Calculate Macros</h3>
                                    <h4>
                                        Use our in house calculator to calculate your daily
                                        caloric/macro needs
                  </h4>
                                </div>
                            </div>
                            <div className="card">
                                <i className="fas fa-utensils" />
                                <div className="content-card">
                                    <h3>Choose Your Food</h3>
                                    <h4>
                                        Use recepies database to find meals tailored to your
                                        caloric needs.
                  </h4>
                                </div>
                            </div>
                            <div className="card">
                                <i className="fas fa-dumbbell" />
                                <div className="content-card">
                                    <h3>Workout daily</h3>
                                    <h4>You can search for workout videos! Do it daily and you will see the result.</h4>
                                </div>
                            </div>
                        </div>
                    </section>
                 </div>
                )
            }
        }
        
export default Home;