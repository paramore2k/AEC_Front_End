/**
 * Créé par David Champagne
 * 2020/05/20
 *
 */
import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Col from "react-bootstrap/Col";

const tabEmployes = [
    {
        src: ("https://via.placeholder.com/150"),
        alt: "Vincent",
        nom: "Vincent Lamontagne",
        Metier: "Enseignenant",
        courriel: "vincent@gmail.com",
        tel: "(819)123-3446",
        Adresse: "124 des avocats",
    },
    {
        src: ("https://via.placeholder.com/150"),
        alt: "Pierre",
        nom: "Pierre Lamontagne",
        Metier: "Enseignenant en limbo",
        courriel: "pierre@gmail.com",
        tel: "(819)123-5225",
        Adresse: "325 des avocats",
    },
    {
        src: ("https://via.placeholder.com/150"),
        alt: "Éric",
        nom: "Éric Champagne",
        Metier: "Enseignenant en éducation physique",
        courriel: "eric.champagne@gmail.com",
        tel: "(819)123-4444",
        Adresse: "124 des orangers",
    },
    ];

    export class Employe extends React.Component {

    render() {
        return tabEmployes.map((element,i) =>  (

                    <Col lg="3">
                        <Card>
                            <img className="card-img-top img-fluid"
                                      src="https://via.placeholder.com/250"
                                      />
                            <Card.Body>
                                <Card.Title>keys={"employe" + i}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>


        ));

        }
    }