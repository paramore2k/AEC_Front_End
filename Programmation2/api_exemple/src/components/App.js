
import React from 'react';

import {PersonnageV4} from './PersonnageV4';
import {Menu} from "./Menu";
import Container from "react-bootstrap/Container";
import {Route, Switch, Redirect} from "react-router-dom";
import {PersonnageV1} from "./PersonnageV1";
import {PersonnageV3} from "./PersonnageV3";
import {PersonnageV2} from "./PersonnageV2";
import {PersonnageComplet} from "./PersonnageComplet";
import {PageNotFound} from "./PageNotFound";


function App() {
  return (

          <Container>
            <Menu/>
            <Switch>
            <Route path="/" exact component={PersonnageV1} />
            <Route path="/PersonnageV1" component={PersonnageV1} />
            <Route path="/PersonnageV2" component={PersonnageV2} />
            <Route path="/PersonnageV3" component={PersonnageV3} />
            <Route path="/PersonnageV4" component={PersonnageV4} />
            <Route path="/Film/:id" component={PersonnageComplet} />
            <Redirect from="/about-page" to="about" />
            <Route component={PageNotFound} />
            </Switch>
          </Container>
      )
}



export default App;
