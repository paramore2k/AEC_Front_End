/**
 * Créé par David Champagne
 * 2020/06/16
 *
 */
import React from "react";
import {Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import 'holderjs/holder';



export class Perso extends React.Component {




    render(){



        return (


            <>
                        <Col lg={"6"}>
                            <Card className={"h-100 my-3"}>
                                <Card.Img variant={"top"} className={"img-fluid"} src="https://via.placeholder.com/150"/>
                                <Card.Title>{this.props.nom}</Card.Title>
                                <Card.Body>
                                    <Card.Title>{this.props.mass}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                </>

        );
    }
}