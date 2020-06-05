/**
 * Créé par David Champagne
 * 2020/06/04
 *
 */
import React from "react";
import { Switch, Route } from 'react-router-dom';
import {Album} from "./Album";
import Navbar from "react-bootstrap/Navbar";

const Main = () => {

    return(
        <Switch>
            <Route path="single_album/id" component={Album}/>
        </Switch>
    )
}

export default Main
