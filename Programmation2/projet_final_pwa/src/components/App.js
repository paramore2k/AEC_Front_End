import React from 'react';
import {MenuSansPostBack} from "./MenuSansPostBack";
import { Route, Switch } from "react-router-dom";
import ManageDBHooks from "./ManageDBHooks";
import FormEditerFilmHooks from "./FormEditerFilmHooks";
import {AjouterFilm} from "./AjouterFilm";
import {Portfolio} from "./Portfolio";
import {About} from "./About";
import VoirFilm from "./VoirFilm";
import {PageNotFound} from "./PageNotFound";

function App() {
  return (
    /* Emplacement du navbar */
     <>

    <MenuSansPostBack/>
    <Switch>
      <Route exact path="/" component={Portfolio}/>
      <Route exact path="/Films" component={ManageDBHooks}/>
      <Route path="/Films/:id" component={FormEditerFilmHooks}/>
      <Route path="/VoirFilm" component={VoirFilm}/>
      <Route path="/ajouterFilm" component={AjouterFilm}/>
      <Route path="/About" component={About}/>
      <Route component={PageNotFound}/>
    </Switch>
    </>
  );
}

export default App;
