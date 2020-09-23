/**
 * Créé par David Champagne
 * 2020/07/08
 *
 */

import React from "react";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export class AjouterFilm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { photo: "https://via.placeholder.com/400", setErrors: {} };
        this.handleSave = this.handleSave.bind(this);
        this.handlePhoto= this.handlePhoto.bind(this);
    }

    // Pour ajouter un film

    async saveFilm(titre, genre1, genre2,annee_parution, resume, acteur1, acteur2, photo) {

        try {
            const response = await fetch('https://jsonserv.herokuapp.com/films', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({id: titre,
                    titre: titre ,
                    genre: [
                        {
                            nom_genre: genre1
                        },
                        {
                            nom_genre: genre2
                        }
                    ],
                    annee_parution: annee_parution,
                    resume: resume,
                    acteurs: [
                        {
                            name: acteur1
                        },
                        {
                            name: acteur2
                        }
                    ],
                    picture: photo,
                })
            });
            if(response.ok){
                const jsonResponse = await response.json();
                this.props.history.push("/Films");
                toast.success("Ajout du film " + titre + " avec succès");

                return jsonResponse;
            }
            throw new Error('Request failed!');
        }
        catch (error) {
            console.log(error);

        }
    }

    // Pour modifier un film




    // Vérification de la validité du formulaire

    formIsValid(titre,genre1,genre2,acteur1, acteur2, resume,annee_parution,photo){
        const _errors = {};
        if(!titre) _errors.nom = "Le nom est obligatoire";
        if(!genre1) _errors.nom = "Le genre est obligatoire";
        if(!genre2) _errors.nom = "Le genre est obligatoire";
        if(!acteur1) _errors.nom = "L'acteur 1 est obligatoire";
        if(!acteur2) _errors.nom = "L'acteur 2 est obligatoire";
        if(!photo) _errors.photo = "La photo est obligatoire";

        this.setState({setErrors : _errors});
        return Object.keys(_errors).length === 0;
    }

    // Gestion de la sauvegarde avant event.preventDefault

    handleSave(e){
        e.preventDefault();

        const titre = document.getElementById('titre').value;
        const genre1 = document.getElementById('genre1').value;
        const genre2 = document.getElementById('genre2').value;
        const resume = document.getElementById('resume').value;
        const annee_parution = document.getElementById('annee_parution').value;
        const acteur1 = document.getElementById('acteur1').value;
        const acteur2 = document.getElementById('acteur2').value;
        const photo = document.getElementById('photoFilm').value;
        console.log(titre);
        console.log(photo);
        console.log(genre1);
        console.log(genre2);
        console.log(resume);

        if(!this.formIsValid(titre,genre1,genre2,resume, annee_parution,acteur1,acteur2,photo)) return;

        this.saveFilm(titre,genre1, genre2,annee_parution,resume,acteur1,acteur2,photo,);
    }

    // Gestion de l'envoi de la photo via URL, avec preview dès que l'on sort du champs

    handlePhoto(event){
        const photos = document.getElementById('photoFilm').value;
        this.setState( {photo : photos});
    }

    // Affichage du formulaire pour ajouter un nouveau film

    render() {
        return (
            <>
                <Container>
                    <Col className={"mt-1 p-0"}><Link to={"/Films"}>
                        <button className={"btn btn-primary"}>Retourner aux films</button></Link>
                    </Col>
                    <Row>
                     <Col lg={"12"} className={"my-2"}>
                         <h3 className={"text-center my-2"}>Ajouter un nouveau film</h3>
                     </Col>
                    </Row>
                    <Row>
                        {/* Affichage de la pochette lors de l'ajout du lien url */}
                    <Col lg={"4"}>
                        {this.state.photo !== "" && <Image src={this.state.photo} rounded className={"img-fluid"} />}
                    </Col>

                        <Form className={"col-lg-8 mt-2"}>

                            <Form.Group controlId="photoFilm">
                                <Form.Label>URL de la pochette</Form.Label>
                                <Form.Control type="text" placeholder="Entrer une URL valide" className={"col-lg-12"} onBlur={this.handlePhoto}/>
                            </Form.Group>

                            <Form.Group controlId="titre">
                                <Form.Label>Titre</Form.Label>
                                <Form.Control type="text" placeholder="Entrez le titre du film"/>
                            </Form.Group>

                            <Form.Group controlId="resume">
                                <Form.Label>Résumé</Form.Label>
                                <Form.Control as="textarea" rows="3" type="text"/>
                            </Form.Group>

                            {/* Section Genres  */}

                            <h5 className={"mt-1"}>Genres</h5>

                            <Form.Row>
                                <Form.Group as={Col} controlId="genre1">
                                    <Form.Label>Genre 1</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="genre2">
                                    <Form.Label>Genre 2:</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                            </Form.Row>

                            {/* Section Acteurs */}

                            <h5 className={"mt-1"}>Acteurs</h5>
                            <Form.Row>
                                <Form.Group as={Col} controlId="acteur1">
                                    <Form.Label>Acteur 1</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="acteur2">
                                    <Form.Label>Acteur 2</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                            </Form.Row>

                            {/* Section année parution */}
                            <Form.Group controlId="annee_parution">
                                <Form.Label>Année parution</Form.Label>
                                {/* TODO: Mettre le plugin Clever à la place de input type number */}
                                <Form.Control type="number" maxlenght={"4"} />
                            </Form.Group>


                    <Button variant="primary" type="submit" onClick={this.handleSave}>
                        Enregistrer
                    </Button>
                </Form>

                    </Row>
                </Container>
            </>
        );
    }
}