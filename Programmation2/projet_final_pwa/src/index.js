import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.css';



ReactDOM.render(
  <React.StrictMode>
      <Router basename={"/AEC_Front_End/Programmation2/projet_final_pwa/build/"}>
    <App />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
