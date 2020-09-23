import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import ReactImageAppear from 'react-image-appear';
import abominable from '../images/abominable.jpg';
import jaws from '../images/jaws_movie_collection.jpg';
import kos from '../images/staten_island.jpg';
import fast_furious from '../images/fast_furious.jpg';
import elcamino from '../images/el_camino.jpg';
import beetlejuice from '../images/beetlejuice.jpg';
import movie_collection1 from '../images/movie_collection1.jpg';
import whiplash from '../images/whiplash.jpg';
import twojakes from '../images/two_jakes.jpg';
import outpost from '../images/outpost.jpg';
import halloween from '../images/halloween.jpg';
import irresistible from '../images/irresistible.jpg';
/* Images pour le carousel slick */
import ava from "../images/ava_br.jpg";
import gb12 from "../images/gb12.jpg";
import primal from "../images/primal.jpg";
import sk from "../images/stephen_king_br.jpg";
import dbs3 from "../images/dbs3.jpg";
import shutter from "../images/shutter_island_br.jpg";

/* Section pour le carrousel d'image du haut */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




export class Portfolio extends React.Component {

    render() {
            const settings = {
                dots: true,
                adaptiveHeight: true,
                arrows: false,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1
            };
        return(
            <>
                <Container>
                    <Row>
                        <Col lg={"12"} md={"12"} xs={"12"} className={"text-center my-4"}><h4>Bienvenue sur PWA Films ! </h4></Col>
                    </Row>
                    <Slider {...settings}>

                        <Col>
                            <img src={dbs3} alt={"Deep BLue Sea 3"} className="img-fluid"/>
                        </Col>
                        <Col>
                            <img src={ava} alt={"Ava"} className="img-fluid"/>
                        </Col>
                        <Col>
                            <img src={gb12} alt={"Ghostbusters 1-2"} className="img-fluid"/>
                        </Col>
                        <Col>
                            <img src={primal} alt={"Primal"} className="img-fluid"/>
                        </Col>
                        <Col>
                            <img src={sk} alt={"Stephen King"} className="img-fluid"/>
                        </Col>
                        <Col>
                            <img src={shutter} alt={"Shuuter Island"} className="img-fluid"/>
                        </Col>
                    </Slider>

                    <Row className={"mt-5"}>
                        <Col lg={"3"} xs={"6"}>
                            <ReactImageAppear src={abominable} animation={"zoomIn"} animationDuration={"2s"} alt={"Abominable"} className="img-fluid mb-2 img-thumbnail"/>
                        </Col>
                        <Col lg={"3"} xs={"6"}>
                            <ReactImageAppear src={jaws} animation="blurIn" animationDuration="2s" alt={"Jaws"} className="img-fluid img-thumbnail"/>
                        </Col>
                        <Col lg={"3"} xs={"6"}>
                            <ReactImageAppear animation="blurIn" animationDuration="2s" src={fast_furious} alt={"Fast And Furious"} className={"img-fluid img-thumbnail"}/>
                        </Col>
                        <Col lg={"3"} xs={"6"}>
                            <ReactImageAppear src={outpost} animation="zoomIn" animationDuration="2s" alt={"Outpost"} className="img-fluid img-thumbnail"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={"3"} xs={"6"}>
                            <ReactImageAppear src={kos} alt={"King of Staten Island"} animation="blurIn" animationDuration="1s" className={"img-fluid img-thumbnail"}/>
                        </Col>
                        <Col lg={"3"} xs={"6"}>
                            <ReactImageAppear src={elcamino} animation="zoomIn" animationDuration="2s" alt={"El Camino a Breaking Bad Movie"} className={"img-fluid img-thumbnail"}/>
                        </Col>
                        <Col lg={"3"} xs={"6"}>
                            <ReactImageAppear src={irresistible} animation="blurIn" animationDuration="2s" alt={"Irresistible"} className={"img-fluid img-thumbnail"}/>
                        </Col>
                        <Col lg={"3"} xs={"6"}>
                            <ReactImageAppear src={halloween} animation="blurIn" animationDuration="2s" alt={"Halloween"} className={"img-fluid img-thumbnail"}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={"3"} xs={"6"}>
                            <ReactImageAppear animation="zoomIn" animationDuration="2s" src={beetlejuice} alt={"Beetlejuice"} className={"img-fluid img-thumbnail"}/>
                        </Col>
                        <Col lg={"3"} xs={"6"}>
                            <ReactImageAppear animation="zoomIn" animationDuration="2s" src={whiplash} alt={"Whiplash"} className={"img-fluid img-thumbnail"}/>
                        </Col>
                        <Col lg={"3"} xs={"6"}>
                            <ReactImageAppear animation="zoomIn" animationDuration="2s" src={twojakes} alt={"Two Jakes"} className="img-fluid img-thumbnail"/>
                        </Col>
                        <Col lg={"3"} xs={"6"}>
                            <ReactImageAppear animation="zoomIn" animationDuration="2s" src={movie_collection1} alt={"Collection de films 1"} className="img-fluid img-thumbnail"/>
                        </Col>
                    </Row>
                </Container>
                </>

        )
    }
}

