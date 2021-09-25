import React from 'react';
import ScrollToTop from './Components/ScrollToTop';
import Animes from './Components/Animes';
import Nav from './Components/Nav';
import AnimeList from './Components/List';
import AnimeDetail from './Components/AnimeDetail';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class FetchApi extends React.Component {


    render() {
        return (
            <div>
                <Router>
                    <ScrollToTop />
                    <Nav />
                    <Switch>
                        <Route component={Animes} path='/' exact
                        />
                        <Route component={AnimeList} path='/list' />
                        <Route component={AnimeDetail} path='/anime/:id' />
                    </Switch>
                    <Footer />

                </Router>

            </div>
        )
    }
}