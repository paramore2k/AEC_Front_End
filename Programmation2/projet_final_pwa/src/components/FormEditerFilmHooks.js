/**
 * Créé par David Champagne
 * 2020/07/02
 *
 */
import React, {useState, useEffect} from "react";
import {Container} from "react-bootstrap";
import { toast } from 'react-toastify';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {API} from "./constantes";
import Image from "react-bootstrap/Image";
import Cleave from 'cleave.js/react';




function FormEditerFilmHooks(props) {

    /*Afin d'éviter une erreur undefined lorsqu'on lit le tableau abilities, on l'initialise à un tableau vide pour débuter.*/
    const [getData, setgetData] = useState({titre: "", genre:["",""], annee_parution:"", resume:"", acteurs:["", ""], name:"", picture: ""});
    const [filmID, setFilmID] = useState(props.location.search.substring(4,props.location.search.length));
    const [inputPhoto, setPhoto] = useState("");
    const [setdateTime] = useState("");
    /* Gestion des erreurs */

    useEffect(() => {
        getFilmInfos();

    }, []);


    /* Récupération des informations du film pour ensuite remplir le formulaire pour son édition */

    async function getFilmInfos() {
        try {
            const response = await fetch(API + "films/" + filmID);
            setFilmID(filmID);
            console.log(setFilmID);
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
                props.history.push("/Films");
                toast.success("Modification du film " + titre + " effectué avec succès");

                return response;
            }
            throw new Error('Request failed!');
        }
        catch(error){
            console.log(error);
        }
    }

    function onDateChange(e){
        const dateTime = setdateTime(e.target.rawValue);
        setdateTime(dateTime);
    }
    /* Fonction pour obtenir les valeurs des éléments à partir du formulaire */

        function handleEdit(event){

        event.preventDefault()

        const titre = document.getElementById('titre').value;
        const genre1 = document.getElementById('genre1').value;
        const genre2 = document.getElementById('genre2').value;
        const resume = document.getElementById('resume').value;
        const annee_parution = document.getElementById('annee_parution').value;
        const acteur1 = document.getElementById('acteur1').value;
        const acteur2 = document.getElementById('acteur2').value;
        const photo = document.getElementById('photoFilm').value;
        editFilm(titre,genre1,genre2,resume, annee_parution,acteur1,acteur2, photo);
    }

    /* Fonction pour supprimer un film */

    async function deleteFilm() {
        try{
            const response = await fetch(API + "films/" + filmID, {
                method: 'delete',
            });
            if(response.ok){
                props.history.push("/Films");
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
        setPhoto(e.target.value);

    }

    return(
        <>
            <Container>
                <Row>
                    <Col lg={"12"} className={"mt-3"}><a href={"/Films"}><button className={"btn btn-primary"}>Retourner aux films</button></a>
                        <h5 className={"my-3 pb-3 text-center"}>Édition du film <i>{getData.titre}</i></h5></Col>
                </Row>
                <Row>

                    <Col lg={"3"} className={"my-3"}>
                        {getData.picture !=="" && <Image src={inputPhoto} rounded className={"img-fluid"}/>}
                        <Col className={"my-4 text-center"}><button className="btn btn-danger" onClick={deleteFilm}>Supprimer le film</button></Col>
                    </Col>

                    <Form className={"col-lg-8"}>

                        <Form.Group controlId="photoFilm">
                            <Form.Label>URL de la pochette</Form.Label>
                            <Form.Control type="text" placeholder="Entrer une URL valide" className={"col-lg-12"} onBlur={handlePhoto} defaultValue={getData.picture}/>
                        </Form.Group>

                        <Form.Group controlId="titre">
                            <Form.Label>Titre</Form.Label>
                            <Form.Control type="text" defaultValue={getData.titre}/>
                        </Form.Group>

                        <Form.Group controlId="resume">
                            <Form.Label>Résumé</Form.Label>
                            <Form.Control as="textarea" rows="3" type="text" defaultValue={getData.resume}/>
                        </Form.Group>


                        <h5 className={"mt-1"}>Genres</h5>

                        <Form.Row>
                        <Form.Group as={Col} controlId="genre1">
                            <Form.Label>Genre 1</Form.Label>
                            <Form.Control type="text" defaultValue={getData.genre[0].nom_genre}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="genre2">
                            <Form.Label>Genre 2:</Form.Label>
                            <Form.Control type="text" defaultValue={getData.genre[1].nom_genre}/>
                        </Form.Group>
                        </Form.Row>

                        <h5 className={"mt-1"}>Acteurs</h5>
                        <Form.Row>
                        <Form.Group as={Col} controlId="acteur1">
                            <Form.Label>Acteur 1</Form.Label>
                            <Form.Control type="text" defaultValue={getData.acteurs[0].name}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="acteur2">
                            <Form.Label>Acteur 2</Form.Label>
                            <Form.Control type="text" defaultValue={getData.acteurs[1].name}/>
                        </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="annee_parution">
                            <Form.Label>Année parution</Form.Label>
                            <Cleave
                                value={getData.annee_parution}
                                id="annee_parution"
                                options={{ date: true, datePattern: ["Y"] }}
                                onChange={onDateChange}
                                className="form-control"
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className={"mb-2"} onClick={handleEdit}>
                            Enregistrer
                        </Button>
                    </Form>
                </Row>

            </Container>
        </>
    );


}

    export default FormEditerFilmHooks;