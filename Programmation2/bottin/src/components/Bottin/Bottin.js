/**
 * Créé par David Champagne
 * 2020/05/19
 *
 */
import React from "react";
import { Employe } from "../Employe/Employe";

import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Deconnexion} from "../Deconnexion/Deconnexion";
import Col from "react-bootstrap/Col";
import {Ajouter} from "../Ajout/Ajouter";

const tabEmployes = [
    {
        id: 1,
        src: ("https://via.placeholder.com/150"),
        alt: "Vincent",
        nom: "Vincent Lamontagne",
        metier: "Enseignant",
        courriel: "vincent@gmail.com",
        tel: "(819)123-3446",
        adresse: "124 des avocats",
    },
    {
        id: 2,
        src: ("https://via.placeholder.com/150"),
        alt: "Pierre",
        nom: "Pierre Lamontagne",
        metier: "Enseignenant en limbo",
        courriel: "pierre@gmail.com",
        tel: "(819)123-5225",
        adresse: "325 des avocats",
    },
    {
        id: 3,
        src: ("https://via.placeholder.com/150"),
        alt: "Éric",
        nom: "Éric Champagne",
        metier: "Enseignenant en sciences",
        courriel: "eric.champagne@gmail.com",
        tel: "(819)123-4444",
        adresse: "124 des orangers",
    },
    {
        id: 4,
        src: ("https://via.placeholder.com/150"),
        alt: "Éric",
        nom: "David Tousignant",
        metier: "Technicien",
        courriel: "davidt@gmail.com",
        tel: "(819)123-5545",
        adresse: "124 av des Monts",
    },
    {
        id: 5,
        src: ("https://via.placeholder.com/150"),
        alt: "Éric",
        nom: "Éric Champagne",
        metier: "Enseignenant en sciences",
        courriel: "eric.champagne@gmail.com",
        tel: "(819)123-4444",
        adresse: "124 des orangers",
    },
    {
        id: 6,
        src: ("https://via.placeholder.com/150"),
        alt: "Éric",
        nom: "Éric Champagne",
        metier: "Enseignenant en sciences",
        courriel: "eric.champagne@gmail.com",
        tel: "(819)123-4444",
        adresse: "124 des orangers",
    },
    {
        id: 7,
        src: ("https://via.placeholder.com/150"),
        alt: "Éric",
        nom: "Éric Champagne",
        metier: "Enseignenant en sciences",
        courriel: "eric.champagne@gmail.com",
        tel: "(819)123-4444",
        adresse: "124 des orangers",
    },
    {
        id: 8,
        src: ("https://via.placeholder.com/150"),
        alt: "Éric",
        nom: "Éric Champagne",
        metier: "Enseignenant en sciences",
        courriel: "ericc@gmail.com",
        tel: "(819)123-4444",
        adresse: "124 des orangers",
    },
    {
        id: 9,
        src: ("https://via.placeholder.com/150"),
        alt: "Éric",
        nom: "Éric Champagne",
        metier: "Enseignenant en sciences",
        courriel: "ericc@gmail.com",
        tel: "(819)123-4444",
        adresse: "124 des orangers",
    },
    {
        id: 10,
        src: ("https://via.placeholder.com/150"),
        alt: "Éric",
        nom: "Éric Champagne",
        metier: "Enseignenant en sciences",
        courriel: "eriic@gmail.com",
        tel: "(819)123-4444",
        adresse: "124 des orangers",
    },
    {
        id: 11,
        src: ("https://via.placeholder.com/150"),
        alt: "Éric",
        nom: "Éric Champagne",
        metier: "Enseignenant en sciences",
        courriel: "ericc@gmail.com",
        tel: "(819)123-4444",
        adresse: "124 des orangers",
    },
    {
        id: 12,
        src: ("https://via.placeholder.com/150"),
        alt: "Éric",
        nom: "Éric Champagne",
        metier: "Enseignenant en sciences",
        courriel: "ericc@gmail.com",
        tel: "(819)123-4444",
        adresse: "124 des orangers",
    }

]


export class Bottin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {rechercher: "", listeDesEmployes: tabEmployes, reset:false};
        this.Rechercher = this.Rechercher.bind(this);
        this.listeEmployes = this.listeEmployes.bind(this);
        this.btnEffacer = this.btnEffacer.bind(this);
        this.ResetSearch = this.ResetSearch.bind(this);

    }


    ResetSearch(){
        document.getElementById('inputRechercher').value='';
        this.setState({rechercher:""})
    }

    Rechercher() {
        let nom = document.getElementById('inputRechercher').value;
        console.log(nom.length);
        if (nom.length > 0) {
            this.setState({rechercher: nom});
        }

    }


    btnEffacer(){
        return(
            <Button variant="outline-success" className="ml-1" type="button" onClick={this.ResetSearch}>Effacer</Button>
        )

    }

    // Section du Header

      Header() {
            return (
                <Row>
                    <Col>
                <Navbar bg="light">
                    <Navbar.Brand href="#home">Bottin des Employés</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto d-flex justify-content-center">
                            <Form className="search form-inline my-2 my-lg-0" id="SearchForm" onSubmit={e => {e.preventDefault()}}>
                                <input className="form-control mr-sm-2" placeholder="Rechercher"
                                       aria-label='Rechercher' id='inputRechercher'
                                       />
                                <Button variant="success" type="button" onClick={this.Rechercher}>Recherche</Button>
                            </Form>
                        </Nav>
                        <Form>
                            <Button variant="dark" className="mr-2">Ajouter employé</Button>
                        </Form>
                        <Deconnexion onClick={this.verifierConnexion}/>
                    </Navbar.Collapse>
                </Navbar>
                    </Col>
                </Row>
            )
        }


    listeEmployes() {
        if (this.state.rechercher === "") {

            return  this.state.listeDesEmployes.map((element,i) =>

                <Employe
                    key={"bottin" + i}
                    src={element.src}
                    nom={element.nom}
                    metier={element.metier}
                    courriel={element.courriel} 
                    tel={element.tel}
                    alt={element.alt}
                    adresse={element.adresse}>

                </Employe>
                    )

        }

    else {
            const searchResult = this.state.listeDesEmployes.filter(l => l.nom.toLowerCase().includes(this.state.rechercher.toLowerCase()));
            return searchResult.map((element, i) => (

                <Employe
                    key={"bottin" + i}
                    src={element.src}
                    nom={element.nom}
                    metier={element.metier}
                    courriel={element.courriel}
                    tel={element.tel}
                    alt={element.alt}
                    adresse={element.adresse}>
                </Employe>
                ))
        }
}



    render() {
        return  (
            <>
                {this.Header()}
                <Row>
                {this.listeEmployes()}
                </Row>
            </>
        );


    }
}




