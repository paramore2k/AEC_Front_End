import React from 'react';
import '../App.sass';

import {MenuSansPostBack} from "./MenuSansPostBack";
import { useLocation } from 'react-router-dom'
import { Route, Switch } from "react-router-dom";
import ManageDBHooks from "./ManageDBHooks";
import FormEditerFilmHooks from "./FormEditerFilmHooks";
import {AjouterFilm} from "./AjouterFilm";
import {Portfolio} from "./Portfolio";
import {About} from "./About";
import VoirFilm from "./VoirFilm";
import {PageNotFound} from "./PageNotFound";




function App() {
  let location = useLocation();
  console.log(location);
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
      <Route component={PageNotFound} />
      <Route path="/About" component={About}/>
      {/* TODO: Section à propos pour remercier les endroits de leurs images */}
    </Switch>
    </>
  );
}

export default App;
