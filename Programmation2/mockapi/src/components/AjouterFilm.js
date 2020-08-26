/**
 * Créé par David Champagne
 * 2020/07/08
 *
 */

import React from "react";
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
        this.state = { photo: "", setErrors: {} };
        this.handleSave = this.handleSave.bind(this);
        this.handlePhoto= this.handlePhoto.bind(this);

    }

    // Pour ajouter un film

    async saveFilm(nom, photo, genre, acteur1, acteur2) {

        try {
            const response = await fetch('http://localhost:3001/films/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({id: nom,
                    name: nom,
                    genre: genre,
                    acteurs: [
                        {
                            name: acteur1
                        },
                        {
                            name: acteur2
                        },
                    ],
                    picture: photo,
                })
            });
            if(response.ok){
                const jsonResponse = await response.json();
                this.props.history.push("/");
                toast.success("Ajout du film" + nom);

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

    formIsValid(nom,genre,acteur1, acteur2, photo){
        const _errors = {};
        if(!nom) _errors.nom = "Le nom est obligatoire";
        if(!genre) _errors.nom = "Le genre est obligatoire";
        if(!acteur1) _errors.nom = "L'acteur 1 est obligatoire";
        if(!acteur2) _errors.nom = "L'acteur 2 est obligatoire";
        if(!photo) _errors.photo = "La photo est obligatoire";

        this.setState({setErrors : _errors});
        return Object.keys(_errors).length === 0;
    }

    // Gestion de la sauvegarde avant event.preventDefault

    handleSave(event){
        event.preventDefault();

        const nom = document.getElementById('nomFilm').value;
        const genre = document.getElementById('genreFilm').value;
        const acteur1 = document.getElementById('acteur1').value;
        const acteur2 = document.getElementById('acteur2').value;
        const photo = document.getElementById('photoFilm').value;

        if(!this.formIsValid(nom,genre,acteur1,acteur2,photo)) return;

        this.saveFilm(nom,photo,genre,acteur1,acteur2);
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
                    <Col className={"mt-1 p-0"}><a href={"/"}><button className={"btn btn-primary"}>Retourner à l'accueil</button></a></Col>
                    <Row>

                     <Col lg={"7"} className={"mt-3"}>
                         <h3 className={"text-center"}>Ajouter un nouveau film</h3>
                <Form>


                    <Form.Group controlId="nomFilm">
                        <Form.Label>Nom du film</Form.Label>
                        <Form.Control type="text" placeholder="Entrer le nom du film" />
                    </Form.Group>

                    <Form.Group controlId="genreFilm">
                        <Form.Label>Genre</Form.Label>
                        <Form.Control type="text" placeholder="Entrer le genre du film" />
                    </Form.Group>

                    <Form.Group controlId="photoFilm">
                        <Form.Label>URL d'une pochette du film</Form.Label>
                        <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={this.handlePhoto}/>
                        {this.state.photo !== "" && <Image src={this.state.photo} rounded />}
                    </Form.Group>

                    <Form.Group controlId="acteur1">
                        <Form.Label>Nom du premier acteur</Form.Label>
                        <Form.Control type="text" placeholder="Nom du premier acteur" />
                    </Form.Group>

                    <Form.Group controlId="acteur2">
                        <Form.Label>Nom du second acteur</Form.Label>
                        <Form.Control type="text" placeholder="Nom du second acteur" />
                    </Form.Group>




                    <Button variant="primary" type="submit" onClick={this.handleSave}>
                        Enregistrer
                    </Button>
                </Form>
                     </Col>
                    </Row>
                </Container>
            </>
        );
    }
}