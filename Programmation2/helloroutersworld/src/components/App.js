import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Menu} from "./Menu";
import {Carte} from "./Carte";
import {Accueil} from "./Accueil";
import {Photos} from "./Photos";
import {Videos} from "./Video";
import {BrowserRouter, Route} from "react-router-dom";
import {Switch} from 'react-router-dom';
import Router from "react-router-dom/es/Router";

function App() {
    return(
        <>

    <Menu/>
    <Switch>
        <Router history={BrowserRouter}>
        <Route path="/" exact component={Accueil}/>
        <Route path="/Accueil" component={Accueil}/>
        <Route path="/Photos" component={Photos}/>
        <Route path="/Carte" component={Carte}/>
        <Route path="/Videos" component={Videos}/>
        </Router>
    </Switch>
        </>

    )
}

export default App;
