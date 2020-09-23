import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {API} from "./constantes";
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";

function VoirFilm(props) {

    /*Afin d'éviter une erreur undefined lorsqu'on lit le tableau abilities, on l'initialise à un tableau vide pour débuter.*/
    const [getData, setgetData] = useState({
        titre: "",
        genre: ["", ""],
        annee_parution: "",
        resume: "",
        acteurs: ["", ""],
        picture: ""
    });
    const [filmID, setFilmID] = useState(props.location.search.substring(4, props.location.search.length));


    useEffect(() => {
        getFilmInfos();

    }, []);

    /* Récupération des informations du film pour ensuite les intégrer dans la page */

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


        return (
            <>
                <Container>
                    <Row>
                        <Col lg={"12"} sm={"12"} md={"12"} className={"my-3"}><Link to="/Films">
                            <button className={"btn btn-primary"}>Retourner aux films</button>
                        </Link>
                            <h5 className={"mt-4 text-center"}>Informations du film <i>{getData.titre}</i></h5></Col>
                    </Row>

                    <Row>
                        <Col lg={"3"} md={"3"} sm={"6"} className={"my-2 text-center"}>
                            {getData.picture !== "" && <Image src={getData.picture} rounded className={"img-fluid"}/>}
                            <Col className={"my-4 text-center"}>
                            </Col>
                        </Col>

                        <Col lg={"9"} sm={"6"} className={"my-3"}>
                            <b>Titre</b> <p>{getData.titre}</p>
                            <b>Résumé</b>
                            <p>{getData.resume}</p>
                            <b>Année de parution</b>
                            <p>{getData.annee_parution}</p>
                            <b>Genres: </b>
                            <p>{getData.genre[0].nom_genre}<br/>
                            {getData.genre[1].nom_genre}</p>
                            <b>Acteurs: </b>
                            <p>{getData.acteurs[0].name}<br/>
                                {getData.acteurs[1].name}</p>




                        </Col>
                    </Row>
                </Container>
            </>
        );
}

export default VoirFilm;