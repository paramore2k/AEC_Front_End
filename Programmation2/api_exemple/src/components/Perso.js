/**
 * Créé par David Champagne
 * 2020/06/16
 *
 */
import React from "react";
import {Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";


export class Perso extends React.Component {


    render(){

        return (

            <>
                        <Col lg={"6"}>
                            <Card className={"h-100 w-100 my-3 text-center"}>
                                <Link to={"Film/" + this.props.nom}>
                                <Card.Title>{this.props.nom}</Card.Title>
                                </Link>
                                <Card.Body>
                                    <Card.Text>{this.props.height}</Card.Text>
                                    <Card.Text>{this.props.hair}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                </>

        );
    }
}