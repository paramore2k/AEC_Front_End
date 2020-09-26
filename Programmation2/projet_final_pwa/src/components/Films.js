/**
 * Créé par David Champagne
 * 2020/06/16
 *
 */
import React from "react";
import {Row, Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import '../sass/Cards.sass';




export class Films extends React.Component {

    render(){
        return (
            <>


                        <Col lg={"3"} md={"4"} xs={"12"} className={"my-2"}>
                            <Card>
                                <div className="card-grid-view">
                                    <Card.Img src={this.props.photo} alt={this.props.nom} className={"img-fluid"}/>
                                </div>
                                <Card.Body>
                                    <div className={"title"}>{this.props.nom}</div>
                                    <div className={"card-text my-2"}>{this.props.resume.slice(0,50)}...</div>
                                </Card.Body>
                                <div className={"details"}>

                                    <div>{this.props.genre1}, {this.props.genre2}</div>
                                    <div>{this.props.annee}</div>
                                </div>
                                    <Card.Footer>
                                        <Row>
                                        <Col className="d-flex justify-content-around">
                                    <Link to={ '/VoirFilm/' + this.props.nom + "?id=" + this.props.id }>
                                     <button className="btn btn-info"><i className="fa fa-eye fa-1x"/> Info</button>
                                    </Link>
                                    <Link to={ '/Films/' + this.props.nom + "?id=" + this.props.id }>
                                        <button className="btn btn-info"><i className="fa fa-edit fa-1x"/> Editer</button>
                                    </Link>
                                        </Col>
                                        </Row>
                                    </Card.Footer>
                            </Card>
                        </Col>
                </>
        );
    }
}