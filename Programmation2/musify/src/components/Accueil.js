

import React from "react";
import Container from 'react-bootstrap/Container';
import { Connexion } from "./Connexion";
import './Accueil.css';
import {Catalogue} from "./Catalogue";
import { Deconnexion } from "./Deconnexion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Rechercher} from "./Rechercher";
import {Image} from "react-bootstrap";
import Logo from '../img/logo_spotify_black_50.png';


export class Accueil extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            connected : false,
            rechercher: '',
            pageAccueil: true
};
        this.GererConnection = this.GererConnection.bind(this);
        this.verifierConnexion = this.verifierConnexion.bind(this);
        this.Header = this.Header.bind(this);
    }

    // Section rechercher

    Rechercher() {
        if(this.state.pageAccueil === true)
            return(
                <Rechercher rechercher={(rechercher)=>this.setState({ rechercher: rechercher})}/>
            );
    }

    // Section Header

    Header() {
        return (

            <Row className="d-flex align-items-center py-2">
                <Col>
                    <Navbar bg="light" className={"bg2"}>

                        <Navbar.Brand><Image src={Logo} alt={"Logo Musify"}/>Musify</Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto d-flex justify-content-center">
                                {this.Rechercher()}
                            </Nav>
                            <Deconnexion onClick={this.verifierConnexion}/>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>



        )
    }

    // Vérification de la connexion

    verifierConnexion(connexion) {
        this.setState({ connected: connexion });
    }

    // Section pour afficher le mot Catalogue Albums seulement lorsque la personne est connectée et sur la page d'accueil
    motAlbum(){
        if(this.state.connected && this.state.pageAccueil === true){
            return(
                <Row>
                    <Col className={"mt-3 text-center"}>
                        <h3 className={"text-white"}>Catalogue Albums</h3>
                        <hr/>
                    </Col>
                </Row>
            )
        }
    }

    // Gestion de la connexion
    GererConnection () {
        if (this.state.connected) {
            return (
                <Container>
                    {this.Header()}
                    {this.motAlbum()}
                    <Catalogue afficherCatalogue={() => this.setState({ pageAccueil: true, rechercher: ""})} recherche={this.state.rechercher} onClick={() => this.setState({ pageAccueil: false})}/>
                </Container>
            )
        }
        else {
            return (
                <Connexion onClick={this.verifierConnexion}/>
            )
        }
    }

    // Affichage à retourner
    render() {
        return (
            <>
            {this.GererConnection()}
            </>

        );
    }
}