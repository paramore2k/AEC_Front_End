import React from 'react';
import './App.css';
import {Container, Row} from "react-bootstrap";
import {Accueil} from "./Accueil";


function App() {
  return (
    <Container>
      <Row>
        <Accueil/>
      </Row>
    </Container>

  );
}

export default App;
