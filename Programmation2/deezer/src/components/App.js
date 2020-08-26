import React from 'react';
import './App.css';
import {Menu} from "./Navbar";
import {Route, Switch} from "react-router-dom";
import Container from "react-bootstrap/Container";
import {Catalogue} from "./Catalogue";
import {DetailsAlbum} from "./DetailsAlbum";


import { createBrowserHistory } from "history";
import Home from "./Home";


const history = createBrowserHistory();
console.log(history);

function App() {


    return (

        <Container>
          <Menu/>
          <Switch>

            <Route path="/" exact component={Home}/>
            <Route path="/search/:query" component={Catalogue}/>
            <Route path="/details/:id" exact component={DetailsAlbum}/>
          </Switch>
        </Container>
    )
  }

export default App;
