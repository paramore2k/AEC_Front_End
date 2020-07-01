/**
 * Créé par David Champagne
 * 2020/06/23
 *
 */
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {NavLink} from "react-router-dom";


const Header = (props) => {

    return (
        <>
            <Row className="d-flex align-items-center py-2">
                <Col>
                    <Navbar bg="black" variant={"black"} className={"bg2"}>
                        <Navbar.Brand href="/">Exemples d'api</Navbar.Brand>
                            <Nav className="m-auto d-flex justify-content-center">
                            </Nav>
                    </Navbar>
                </Col>
            </Row>
        </>

    )
}

export default Header;
