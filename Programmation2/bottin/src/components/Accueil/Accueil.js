/**
 * Créé par David Champagne
 * 2020/05/19
 *
 */

import { Container, Row, Col } from 'react-bootstrap';
import React from "react";



export const Navbar = () => {

        return (
            <Container>
                <Navbar expand="lg" variant="light" bg="light">
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                </Navbar>
            </Container>

        );
    }

export default Navbar;
