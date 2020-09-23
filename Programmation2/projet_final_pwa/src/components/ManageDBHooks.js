import React, {useState, useEffect} from "react";
import { Container,Row,Col} from "react-bootstrap";
import {Films} from "./Films";
import {API} from "./constantes";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




function ManageDBHooks() {

    const [getData, setGetData] = useState([]);

//     Gestion des erreurs

    useEffect(() => {
        getFilms();
    }, [getData.join(",")]);

    // Fonction pour reçevoir les films de la bd à partir de l'api


    async function getFilms(){
        try {
            const response = await fetch(API + "films/");
            const reponseDeApi = await response.json();
            setGetData(reponseDeApi);
            if (!response.ok) {
                //Permet d'attraper l'erreur 500 et l'erreur 400
                throw Error(response.statusText);
            }
        } catch (error) {
           /* On gère l'erreur */
            console.log(error);
        }
    }



    // Affichage de la page des films

    return (

        <Container>
            <Row>
                <Col lg={"12"} md={"12"} xs={"12"}>
                    <h3 className={"mt-2 text-center"}>Bienvenue sur Prime</h3>
                </Col>

                    <ToastContainer/>

                    <Col lg={"12"} xs={"12"} md={"12"} className={"text-right my-2"}>
                        <a href="/ajouterFilm"><button className={"btn btn-primary"}><i className="fa fa-plus-square-o"/> Ajout Film</button></a>
                    </Col>
            </Row>
            <Row>
                {getData.map((key,i) => (
                    <Films nom={key.titre} id={key.id} key={key.id} toutLobjet={key} acteur1={key.acteurs[0].name} resume={key.resume} acteur2={key.acteurs[1].name} genre1={key.genre[0].nom_genre} genre2={key.genre[1].nom_genre} annee={key.annee_parution} photo={key.picture}/>
                ))}
            </Row>
        </Container>
    );
}

export default ManageDBHooks;