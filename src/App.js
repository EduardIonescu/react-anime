import React from 'react';
import Animes from './Components/Animes';
import Nav from './Components/Nav';
import myList from './Components/List';
import AnimeDetail from './Components/AnimeDetail';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class FetchApi extends React.Component {


    render() {
        return (
            <div>
                <Router>
                    <Nav />
                    <Switch>
                        <Route component={Animes} path='/' exact
                        />
                        <Route component={myList} path='/list' />
                        <Route component={AnimeDetail} path='/anime/:id'/>
                    </Switch>
                </Router>

            </div>
        )
    }
}