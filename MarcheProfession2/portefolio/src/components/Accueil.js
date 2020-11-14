import React from "react";
import {Container, Col, Row} from "react-bootstrap"
import Hero from '../img/sai-kiran-anagani-5Ntkpxqt54Y-unsplash.jpg';
import Logo_React from '../img/logo/react-seeklogo.com.svg';
import Logo_PHP from '../img/logo/PHP-logo.svg';
import Realisations from '../img/programming-3173456.png';
import LOGO_JS from '../img/js.svg';
import Logo_HTML from '../img/logo/clipart688026.png';
import PWA_Logo from '../img/logo/PWA_Logo.png';
import "../index.css";





export class Accueil extends React.Component {
    render() {
        const HeroStyle = {
            backgroundImage: `url(${Hero})`,
        };
        const RealisationsStyle = {
            backgroundImage: `url(${Realisations})`,
        };
        return (
            <>
                <div className={"hero"}>
                <div className="bg-hero" style={HeroStyle}/>
                <Container fluid>
                    <div className="bg-text">
                        <Col lg={"12"} md={"12"} xs={"12"}><h2>Développeur Web</h2></Col>


                        <Col lg={"12"} md={"12"} xs={"12"}><h6>Intégration / Programmation</h6></Col>
                    </div>
                </Container>
                </div>
                             <Container>
                            <div className="d-flex justify-content-around p-5">
                                <Col lg={"6"} xs={"6"}>
                                    <img src={Logo_React} className="img-fluid" alt=""/>
                                </Col>
                                <Col lg={"6"} xs={"6"}>
                                    <img src="https://i.imgur.com/v34wWJP.png" className="img-fluid" alt=""/>
                                </Col>
                                {/* Section React */}
                            </div>
                             </Container>



                <div id="realisations">
               <div className="container-fluid text-center bg_realisations d-flex">
                   <Container className={"m-3 p-5"}>
                    <Row>
                        <Col lg={"12"} xs={"12"} className={""}>
                            <h4 className="align-content-center justify-content-center m-0 text-center">Quelques réalisations</h4>
                        </Col>
                        {/* Section React */}
                    </Row>
                   </Container>
               </div>

                <Container>
                    <Row>
                        <Col lg={"6"} xs={"6"} className="mt-3 mb-4">
                            <h3 className="text-center">Projet Final PWA</h3>
                            <p className="text-left">Application que j'ai conçue dans le cadre de mon cours de programmation qui consiste à gérer une base de données de type json
                                sous formes de requêtes api. Les requêtes permises sont de types <b>C</b>réation, <b>L</b>ecture, <b>É</b>dition et <b>S</b>uppression, plus communément appelé "<b>CRUD</b>".
                            </p>
                            <p className="text-left">Polyvalente, elle contient actuellement des films mais pourrait également contenir d'autres types de média.</p>
                            <a href="https://paramore2k.github.io/AEC_Front_End/Programmation2/projet_final_pwa/build">Voir l'application</a>
                        </Col>


                        <Col lg={"6"} xs={"6"} className="mt-3 mb-5">
                            <img src="https://i.imgur.com/lv2pca3.jpg" className="img-fluid img-thumbnail" alt="Aperçue PWA"/>
                        </Col>

                        {/* Section PHP */}
                    </Row>

                    <Row>
                        <Col lg={"6"} xs={"6"} className=""><img src="https://i.imgur.com/7pFtr0j.png" alt="Logo PHP" className="img-fluid img-thumbnail"/></Col>

                        <Col lg={"6"} xs="6" className="justify-content-center align-content-center mt-3 mb-3">
                            <h3>Projet Final PHP</h3>
                            <p>Dans le cadre de mon cours infrastructure web, nous avions à élaborer un programme permmettant la gestion de nouvelles à partir d'une base de données mysql.</p>
                            <p>Nous avions également un module personnelle à intégrer dans l'application. Le sujet étant à notre guise, j'ai décidé d'intégrer l'affichage d'albums de musique.</p>
                        </Col>

                        {/* Section HTML5 / CSS */}

                        <Col lg={"6"} xs={"6"} className="justify-content-center align-content-center m-auto">
                            <h3>Projet Intégration : CHVRCHES</h3>
                            <p>Dans le cadre du cours Intégration, tout premier projet final réalisé sur le groupe CHVRCHES.</p>
                            <a href="https://paramore2k.github.io/AEC_Front_End/Integration1/projet_final/index.html" target="_blank" rel="noreferrer">Voir le projet</a>

                        </Col>


                        <Col lg={"6"} xs={"6"}><img src="https://via.placeholder.com/200" className={"img-fluid m-2"} alt=""/></Col>

                </Row>
                </Container>

                {/* Section me joindre */}

                <Container id="me_joindre">
                    <h5 className="text-center m-5">Me joindre</h5>
                    <Row className="text-center">
                        <Col lg={"6"} xs={"12"}>
                            <i className="fab fa-facebook-f fa-6x mb-1"/>
                        </Col>
                        <Col lg={"6"} xs={"12"}>
                            <i className="fab fa-github-square fa-6x"/>
                        </Col>
                    </Row>
                </Container>
               </div>



            </>
        )
    }
}
