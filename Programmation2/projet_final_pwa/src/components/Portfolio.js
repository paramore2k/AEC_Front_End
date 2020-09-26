import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import ReactImageAppear from 'react-image-appear';
import abominable from '../images/abominable.jpg';
import jaws from '../images/jaws_movie_collection.jpg';
import fast_furious from '../images/fast_furious.jpg';
import outpost from '../images/outpost.jpg';
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
import Gallery from "react-photo-gallery";




export class Portfolio extends React.Component {

    render() {
            const photos = [
                {
                  src: 'https://i.imgur.com/RVQB2Cd.jpg',
                  alt: 'King of staten island',
                  width: 3,
                  height: 4
                },
                {
                    src: 'https://i.imgur.com/2zufAty.jpg',
                    alt: 'Breaking Bad',
                    width: 3,
                    height: 2
                },
                {
                    src: 'https://i.imgur.com/fQRLFw1.jpg',
                    alt: '1917',
                    width: 3,
                    height: 4
                }

            ];

            const photos2 = [
            {
                src: 'https://i.imgur.com/xtl29V5.jpg',
                alt: 'Maléfique',
                width: 4,
                height: 2
            },
            {
                src: 'https://i.imgur.com/FEt1iQS.jpg',
                alt: 'Alita battle angel',
                width: 4,
                height: 2
            }

        ];
        const BasicRows = () => <Gallery photos={photos} direction={"row"}/>;
        const BasicRows2 = () => <Gallery photos={photos2}/>

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
                            <img src={dbs3} alt="Deep BLue Sea 3" className="img-fluid"/>
                        </Col>
                        <Col>
                            <img src={ava} alt="Ava" className="img-fluid"/>
                        </Col>
                        <Col>
                            <img src={gb12} alt="Ghostbusters 1-2" className="img-fluid"/>
                        </Col>
                        <Col>
                            <img src={primal} alt="Primal" className="img-fluid"/>
                        </Col>
                        <Col>
                            <img src={sk} alt="Stephen King" className="img-fluid"/>
                        </Col>
                        <Col>
                            <img src={shutter} alt="Shutter Island" className="img-fluid"/>
                        </Col>
                    </Slider>

                    <Row className={"mt-5"}>
                        <Col lg={"3"} xs={"6"}>
                            <ReactImageAppear src={abominable} alt="Abominable" animation="blurIn" animationDuration="1s"  className="img-fluid img-thumbnail"/>
                        </Col>
                        <Col lg={"3"} xs={"6"}>
                            <ReactImageAppear src={jaws} alt="Jaws" animation="blurIn" animationDuration="1s"  className="img-fluid img-thumbnail"/>
                        </Col>
                        <Col lg={"3"} xs={"6"}>
                            <ReactImageAppear src={fast_furious} animation="blurIn" alt="Fast And Furious" animationDuration="1s"   className="img-fluid img-thumbnail"/>
                        </Col>
                        <Col lg={"3"} xs={"6"}>
                            <ReactImageAppear src={outpost} alt="Outpost" animation="blurIn" animationDuration="1s"  className="img-fluid img-thumbnail"/>
                        </Col>
                    </Row>

                    {/* Emplacement de la gallerie photo de react-gallery */}
                    <BasicRows/>
                    <BasicRows2/>
                </Container>
                </>

        )
    }
}

