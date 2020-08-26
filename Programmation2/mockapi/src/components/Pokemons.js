/**
 * Créé par David Champagne
 * 2020/07/07
 *
 */

import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";


export class Pokemons extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        console.log(this.props.toutLobjet);
        return(
            <>

                <Col lg={"4"} className={"mt-3"}>
                <Card>

                    <Card.Header className={"text-center"}>
                        <img src={this.props.photo} className={"img-fluid"}/>
                    </Card.Header>
                    <Card.Body>
                        <Link to={"Film/" + this.props.nom + "?id=" + this.props.id}>
                            <Card.Text className={"text-center"}>{this.props.nom}</Card.Text>
                        </Link>
                    </Card.Body>
                </Card>
                </Col>

            </>
        );
    }
}