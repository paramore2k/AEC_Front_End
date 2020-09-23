import React from "react";

import {Col, Container, Row} from "react-bootstrap";

export class About extends React.Component{

    render() {
        return(
            <>
                <Container>
                    <Row>
                        <Col lg={"12"} sm={"12"} className={"my-2"}>
                            <h4 className={"text-center my-5"}>À propos</h4>
                            <p>Projet Final PWA à pour ojectif de maintenir une base de données avec plusieurs films ainsi que d'en présenter la plupart sur la page d'accueil.
                            Pour ce faire, nous avons dûe utiliser plusieurs images provenants de différentes sources. Nous tenons ainsi à les remercier</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={"12"} sm={"12"} className={"mt-1 mb-2"}>
                            <h6 className={"text-center mb-4"}>Source pour les images de ce projet: </h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={"6"} sm={"6"} md={"6"} xs={"6"}>
                            <img src="https://www.archambault.ca/images/logo.svg" className={"img-fluid"} alt={"Archambault"}/>
                        </Col>
                        <Col lg={"6"} sm={"6"} md={"6"} xs={"6"}>
                            <img src={"https://www.cinoche.com/img/fb-share-ab0662e983.jpg"} className={"img-fluid"} alt={"Cinoche"} />
                        </Col>
                    </Row>
                </Container>
                </>

        )

    }
}
