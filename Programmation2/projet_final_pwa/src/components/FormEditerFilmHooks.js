/**
 * Créé par David Champagne
 * 2020/07/02
 *
 */
import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {toast} from 'react-toastify';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {API} from "./constantes";
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";


function FormEditerFilmHooks(props) {

    /*Afin d'éviter une erreur undefined lorsqu'on lit le tableau abilities, on l'initialise à un tableau vide pour débuter.*/
    const [getData, setgetData] = useState({titre: "", genre:["",""], annee_parution:"", resume:"", acteurs:["", ""], name:"", picture:""});
    const [filmID, setFilmID] = useState(props.location.search.substring(4,props.location.search.length));
    const [getPhoto, setPhoto] = useState({picture: ""});
    const [validated, setValidated] = useState(false);
    const options = [
        { value: 'Action', label :'Action'},
        { value: 'Suspense', label: 'Suspense'},
        { value: 'Drame', label: 'Drame'}
    ];


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }
        else {
            setValidated(true);
            const titre = document.getElementById('titre').value;
            const genre1 = document.getElementById('genre1').value;
            const genre2 = document.getElementById('genre2').value;
            const resume = document.getElementById('resume').value;
            const annee_parution = document.getElementById('annee_parution').value;
            const acteur1 = document.getElementById('acteur1').value;
            const acteur2 = document.getElementById('acteur2').value;
            const photo = document.getElementById('photoFilm').value;
            event.preventDefault();

            editFilm(titre, genre1, genre2, resume, annee_parution, acteur1, acteur2, photo);

        }
    };
    /* Gestion des erreurs */

    useEffect(() => {
        getFilmInfos();

    }, []);


    /* Récupération des informations du film pour ensuite remplir le formulaire pour son édition */

    async function getFilmInfos() {
        try {
            const response = await fetch(API + "films/" + filmID);
            setFilmID(filmID);
            const reponseDeApi = await response.json();
            setgetData(reponseDeApi);
            //Ajout de la gestion des erreurs
            if (!response.ok) {
                throw Error(response.statusText);
            }
        } catch (error) {
            console.log(error);
        }
    }

    /* Fonction principale d'édition du film  */


    async function editFilm(titre, genre1, genre2, resume, annee_parution, acteur1, acteur2, photo) {
        try{
            const response = await fetch(API + "films/" + filmID, {
                method:'PUT',
                headers: {'Content-Type': 'application/json'  },
                body:JSON.stringify({id : filmID,
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
                props.history.push("/");
                toast.success("Modification du film " + titre + " effectué avec succès");

                return response;
            }
            throw new Error('Request failed!');
        }
        catch(error){
            console.log(error);
        }
    }


    /* Fonction pour supprimer un film */

    async function deleteFilm() {
        try{
            const response = await fetch(API + "films/" + filmID, {
                method: 'delete',
            });
            if(response.ok){
                props.history.push("/");
                toast.warn("Suppression du film effectué avec succès");
                return response;
            }
            throw new Error('Request failed!');
        }
        catch(error){
            console.log(error);
        }
    }


    /* Fonction pour la gestion de la photo, pochette du film après le onBlur */

    function handlePhoto(e){
        getData.picture = document.getElementById('photoFilm').value;
        const getPhoto = getData.picture;
        setPhoto(getPhoto);
        setPhoto(e.target.value);
    }
    const { selectedOption } = this.state;

    return(
        <>
            <Container>
                <Row>
                    <Col lg={"12"} className={"mt-3"}><Link to={"/"}><button className={"btn btn-primary"}>Retourner aux films</button></Link>
                        <h5 className={"my-3 pb-3 text-center"}>Édition du film <i>{getData.titre}</i></h5></Col>
                </Row>
                <Row>

                    <Col lg={"3"} className={"my-3"}>
                        {getData.picture !=="" && <Image src={getData.picture} rounded className={"img-fluid"}/>}
                        <Col className={"my-4 text-center"}><button className="btn btn-danger" onClick={deleteFilm}>Supprimer le film</button></Col>
                    </Col>

                    <Form className={"col-lg-8"} noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group controlId="photoFilm">
                            <Form.Label>URL de la pochette</Form.Label>
                            <Form.Control type="text" placeholder="Entrer une URL valide" className={"col-lg-12"} onBlur={handlePhoto} required defaultValue={getData.picture}/>
                            <Form.Control.Feedback type='invalid'>Vous devez entrer une url valide</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="titre">
                            <Form.Label>Titre</Form.Label>
                            <Form.Control type="text" defaultValue={getData.titre} required minLength="1"/>
                            <Form.Control.Feedback type='invalid'>Le titre est obligatoire</Form.Control.Feedback>

                        </Form.Group>

                        <Form.Group controlId="resume">
                            <Form.Label>Résumé</Form.Label>
                            <Form.Control as="textarea" rows="3" type="text" defaultValue={getData.resume} required minLength={"6"}/>
                            <Form.Control.Feedback type='invalid'>Le résumé est obligatoire</Form.Control.Feedback>
                        </Form.Group>


                        <h5 className={"mt-1"}>Genres</h5>

                        <Form.Row>
                        <Form.Group as={Col} controlId="genre1">
                            <Form.Label>Genre 1</Form.Label>
                            <Form.Control required type="text" defaultValue={getData.genre[0].nom_genre} />
                            <Form.Control.Feedback type='invalid'>Le nom du premier genre est obligatoire</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="genre2">
                            <Form.Label>Genre 2:</Form.Label>
                            <Form.Control required type="text" defaultValue={getData.genre[1].nom_genre}/>
                            <Form.Control.Feedback type='invalid'>Le nom du second genre est obligatoire</Form.Control.Feedback>
                        </Form.Group>
                        </Form.Row>

                        <h5 className={"mt-1"}>Acteurs</h5>
                        <Form.Row>
                        <Form.Group as={Col} controlId="acteur1">
                            <Form.Label>Acteur 1</Form.Label>
                            <Form.Control type="text" defaultValue={getData.acteurs[0].name}/>
                            <Form.Control.Feedback type='invalid'>Le nom du premier acteur(trice) est obligatoire</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="acteur2">
                            <Form.Label>Acteur 2</Form.Label>
                            <Form.Control type="text" defaultValue={getData.acteurs[1].name} required isInvalid={!getData.acteurs[1].name}/>
                            <Form.Control.Feedback type='invalid'>Le nom du second acteur(trice) est obligatoire</Form.Control.Feedback>
                        </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="annee_parution">
                            <Form.Label>Année parution</Form.Label>
                            <Form.Control type="text" defaultValue={getData.annee_parution} required minLength="4" maxLength={"4"}/>
                            <Form.Control.Feedback type='invalid'>L'année est obligatoire et doit être de 4 chiffres</Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit" className={"mb-2"}>
                            Enregistrer
                        </Button>
                    </Form>
                </Row>

            </Container>
        </>
    );


}

    export default FormEditerFilmHooks;