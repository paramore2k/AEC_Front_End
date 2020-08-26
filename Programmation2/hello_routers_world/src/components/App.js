import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Menu} from "./Menu";

import {Accueil} from "./Accueil";
import Container from "react-bootstrap/Container";
import {Photos} from "./Photos";
import {Route} from "react-router-dom";
import {ExempleLink} from "./ExempleLink";
import {Videos} from "./Video";
import {Footer} from "./Footer";
import {Carte} from "./Carte";


function App() {


    return(

            <Container>
             <Menu/>
                <Route exact path="/" component={Accueil} />
                <Route path="/Accueil" component={Accueil} />
                <Route path="/Photos" component={Photos} />
                <Route path="/Videos" component={Videos} />
                <Route path="/Carte" component={Carte} />
            </Container>
    )
}

export default App;
