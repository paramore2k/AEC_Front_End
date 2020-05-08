import React from 'react';
import Col from 'react-bootstrap/Col';
import logo from "../../img/becflix.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Catalogue } from "../Catalogue/Catalogue";

import './App.css';


function App() {
  return (
    <Container fluid>
      <Row>
      <Col>
          <img src={logo} alt="BecFlix" width="100px"/>
      </Col>
      </Row>
        <Catalogue/>
    </Container>
  );
}

export default App;
