import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Menu} from "./Menu";

import {Accueil} from "./Accueil";
import Container from "react-bootstrap/Container";
import {Photos} from "./Photos";
import {Route} from "react-router-dom";


function App() {
    return(
        <>
            <Container>

             <Menu/>

                <Route link="/" component={Accueil} />
                <Route link="/Photos" component={Photos} />
            </Container>
        </>

    )
}

export default App;
