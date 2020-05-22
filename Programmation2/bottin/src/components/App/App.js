import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Bottin} from "../Bottin/Bottin";
import {Container} from "react-bootstrap";
import {Navbar} from "react-bootstrap";



function App() {
  return (
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">Bottin</Navbar.Brand>
        </Navbar>
          <Bottin/>
      </Container>
  );
}

export default App;
