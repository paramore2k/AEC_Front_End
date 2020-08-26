import React, {useState, useEffect} from "react";
import { Container,Row,Col } from "react-bootstrap";
import {Films} from "./Films";


function ManageFilmsHooks() {

    const [getData, setGetData] = useState([]);

//     Gestion des erreurs

    useEffect(() => {
        getFilms();
    }, [getData.join(",")]);


    async function getFilms(){
        try {
            const response = await fetch("http://localhost:3001/films/");
            const reponseDeApi = await response.json();
            setGetData(reponseDeApi);
            if (!response.ok) {
                //Permet d'attraper l'erreur 500 et l'erreur 400
                throw Error(response.statusText);
            }
        } catch (error) {
            //On gère l'erreur
            console.log(error);
        }
    }


    // Affichage de la page d'accueuil, page principal de la liste des films

        return (
            <Container>
                <Row>
                    <Col lg={"12"}>
                        <h2 className={"mt-2 text-center"}>Bienvenue sur Prime</h2>
                    </Col>
                    {getData.map((key,i) => (

                        <Films nom={key.name} id={key.id} key={key.name+key.id} toutLobjet={key} genre={key.genre} photo={key.picture}/>
                    ))}
                </Row>
            </Container>
        );
}

export default ManageFilmsHooks;