/**
 * Créé par David Champagne
 * 2020/05/20
 *
 */
import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {ListGroup, ListGroupItem} from "react-bootstrap";


export class Employe extends React.Component {


    render() {
        return (

        <Col lg="3" xl="2" md="3" className="mt-3">
            <Card className="h-100 bg-light">
                <Card.Img variant="top" src={this.props.src} alt={this.props.alt}/>
                <div className="card-body">
                    <div className="card-title">{this.props.nom}</div>
                    <Card.Text className="small">{this.props.metier}</Card.Text>
                </div>
                    <ListGroup className="list-group-flush small">
                        <ListGroupItem><b>Courriel:</b> <p className="small float-left">{this.props.courriel}</p></ListGroupItem>
                        <ListGroupItem><b>Tél:</b> <p className="small">{this.props.tel}</p></ListGroupItem>
                    </ListGroup>
            </Card>
        </Col>

        );
    }
}







