/**
 * Créé par David Champagne
 * 2020/06/30
 *
 */
import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import {Jumbotron} from "react-bootstrap";
import {Footer} from "./Footer";


export class Photos extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <Container className={"my-3"}>
                    <Row>
                        <Col lg={"12"} className={"my-4 text-center"}>
                            <h5>Voici quelques photos du parc safari</h5>
                        </Col>
                    </Row>
                </Container>

                <Container className="d-flex justify-content-center">
                    <Jumbotron>
                    <Row>

                        <Col lg={"3"}>
                            <img
                                className="img-fluid img-thumbnail"
                                src={"https://www.lecourrierdusud.ca/wp-content/uploads/sites/51/2019/07/parc-safari-1600x1067-1600x1067-1600x1067.jpg"}
                                alt={"Parc Safari"}
                            />
                        </Col>

                        <Col lg={"3"}>
                            <img
                                className="img-fluid img-thumbnail"
                                src={"https://www.parcsafari.com/wp-content/uploads/2019/03/photoshoot_100-1.jpg"}
                                alt={"Parc Safari"}
                                />
                        </Col>

                        <Col lg={"3"}>
                            <img
                                className="img-fluid img-thumbnail"
                                src={"https://lh3.googleusercontent.com/proxy/UFQhDKS2KvvVkY9IpJNcTcqtH_1goBtkSdtwaPcvGH3e33QvjYv8cZj7zl2nTdTzVUTUYs87cgIVlOPBDDspDkX8aPabCtTFSs2qiwiRSVnaYxcaQNnaZk3wMUDWGu66OJkxk1L3sMCc3SaPZkR-2SiP6uRZrfGgHX6Vp1SjBVYoraFRej4"}
                                alt={"Parc Safari"}
                            />
                        </Col>

                        <Col lg={"3"}>
                            <img
                                className="img-fluid img-thumbnail my-2"
                                src={"https://mobile-img.lpcdn.ca/lpca/924x/r3996/2843f33f-a69a-11e9-a65c-0eda3a42da3c.jpg"}
                                alt={"Parc Safari"}
                            />
                        </Col>

                        <Col lg={"3"}>
                        <img
                            className="img-fluid img-thumbnail my-2"
                            src={"https://www.canadafrancais.com/wp-content/uploads/sites/11/2019/07/Rougeole18-1600x1067.jpg"}
                            alt={"Parc Safari"}
                        />
                        </Col>

                        <Col lg={"3"}>
                            <img
                                className="img-fluid img-thumbnail my-2"
                                src={"https://www.journalsaint-francois.ca/wp-content/uploads/sites/50/2018/07/safari-1024x681.jpg"}
                                alt={"Parc Safari"}
                            />
                        </Col>

                        <Col lg={"3"}>
                            <img
                                className="img-fluid img-thumbnail my-2"
                                src={"https://images.lpcdn.ca/924x615/200907/27/96639-limba-46-ans-offre-large.jpg"}
                                alt={"Parc Safari"}
                            />
                        </Col>

                        <Col lg={"3"}>
                            <img
                                className="img-fluid img-thumbnail my-2"
                                src={"https://www.passeportvacances.com/DATA/PHOTO/14095.jpg"}
                                alt={"Parc Safari"}
                            />
                        </Col>

                        <Col lg={"3"}>
                            <img
                                className="img-fluid img-thumbnail my-2"
                                src={"https://www.fqcc.ca/actualites/wp-content/uploads/2017/05/lagons-1024x682.jpg"}
                                alt={"Parc Safari"}
                            />
                        </Col>

                        <Col lg={"3"}>
                            <img
                                className="img-fluid img-thumbnail my-2"
                                src={"https://www.guidetourisme.org/wp-content/uploads/2015/04/Thoiry-tunnel-lion-6.jpg"}
                                alt={"Parc Safari"}
                            />
                        </Col>

                        <Col lg={"3"}>
                            <img
                                className="img-fluid img-thumbnail my-2"
                                src={"https://media2.ledevoir.com/images_galerie/nwd_530244_385147/image.jpg"}
                                alt={"Parc Safari"}
                            />
                        </Col>

                        <Col lg={"3"}>
                            <img
                                className="img-fluid img-thumbnail my-2"
                                src={"https://static.forfaitsquebec.com/uploads/2019/05/20190511_191258.jpg"}
                                alt={"Parc Safari"}
                            />
                        </Col>

                    </Row>

                    </Jumbotron>


                </Container>
                <Footer/>


            </>
        )
    }

}