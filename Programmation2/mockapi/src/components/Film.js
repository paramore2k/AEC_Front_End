/**
 * Créé par David Champagne
 * 2020/06/16
 *
 */
import React from "react";
import {Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";


export class Film extends React.Component {

    
    render(){

        return (

            <>
                <Container>
                        <Col lg={"6"}>
                            <Card className={"my-3 text-center"}>
                                <Card.Img src={this.props.match.params.photo} className={"img-fluid"}/>
                                <Card.Title></Card.Title>
                            </Card>
                        </Col>
                </Container>
                </>

        );
    }
}