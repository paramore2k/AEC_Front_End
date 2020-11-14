import React from 'react';
import {Header} from "./Header";
import { Route } from "react-router-dom";
import {Accueil} from "./Accueil";


function App() {
  return (
      /* Header */
    <>
        <Header/>
            <Route exact path="/" component={Accueil}/>
        </>
  );
}

export default App;
