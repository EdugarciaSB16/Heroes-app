import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import NavBar from '../components/ui/Navbar';
import MarvelScreen from '../components/marvel/MarvelScreen'
import HeroesScreen from '../components/heroes/HeroesScreen';
import DcScreen from '../components/dc/DcScreen'
import { Container } from 'react-bootstrap';
import SearchScreen from '../components/search/SearchScreen';

const DashboardRoutes = () => {
    return (
        <>
            <NavBar/>

            <Container>
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen }/>
                    <Route exact path="/hero/:heroeId" component={ HeroesScreen }/>
                    <Route exact path="/dc" component={ DcScreen }/>
                    <Route exact path="/heroSearch" component={ SearchScreen }/>
                    <Redirect to="/marvel"/>
                </Switch>
            </Container>
        </>
    );
};

export default DashboardRoutes;