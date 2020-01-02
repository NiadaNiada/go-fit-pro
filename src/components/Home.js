import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content, Link } from 'react-mdl';

class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <h1>Wellcome to Go FIT-PRO</h1>
                <section id="pg-2">
                    <div className="welcomeImg" />
                    <div className="welcome-card">
                        <div>
                            <h2>Food Tracking Made Easy</h2>
                            <h4>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                                maxime nostrum, impedit quae numquam pariatur laborum vel
                                quibusdam neque. Nam sapiente inventore perspiciatis animi nemo
                                unde aspernatur esse nostrum exercitationem eveniet. Eligendi
                                corporis et vero obcaecati at tempore praesentium voluptates,
                                sed neque, pariatur a dignissimos harum fuga quibusdam eius
                                itaque.
                </h4>
                        </div>
                    </div>
                </section>
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
                                    Comb through our database to find meals tailored to your
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
                <footer>
                    <div className="foot">Copyright © 2019. All Rights Reservered</div>
                </footer>
            </div>

        )
    }
}

export default Home;