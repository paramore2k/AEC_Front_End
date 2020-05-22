/**
 * Créé par David Champagne
 * 2020/05/20
 *
 */
import React from "react";
import Card from "react-bootstrap/Card";

export class Employe extends React.Component {

    render() {

        return (
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/40x40" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>




        );
    }
}