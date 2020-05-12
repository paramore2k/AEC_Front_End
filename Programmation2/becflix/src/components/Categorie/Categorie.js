/**
 * Créé par David Champagne
 * 2020/05/05
 *
 */
import React from "react";
import { TvShow } from "../TvShow/TvShow";

import Row from "react-bootstrap/Row";

const tabSuspense = [
    {
        src: require("../../img/Suspense/lesinvincibles.jpg"),
        alt: "Les invincibles",
        title: "Les invincibles"
    },
    {
        src : require("../../img/Suspense/serienoire.jpg"),
        alt: "Série noire",
        title: "Série noire"
    },
    {
        src : require("../../img/Suspense/fugueuse.jpg"),
        alt: "Fugueuse",
        title: "Fugueuse"
    },
    {
        src : require("../../img/Suspense/district31.jpg"),
        alt: "District 31",
        title: "District 31"
    },
    {
        src : require("../../img/Suspense/19-2.jpg"),
        alt: "19-2",
        title: "19-2"
    },
    {
        src : require("../../img/Suspense/unite9.jpg"),
        alt: "Unité 9",
        title: "Unité 9"
    }

]

const tabHumour = [
    {
        src: require("../../img/Humour/lanceEtCompte.jpg"),
        alt: "Lance et compte",
        title: "Lance et compte"
    },
    {
        src: require("../../img/Humour/lapetitevie.jpg"),
        alt: "La petite vie",
        title: "La petite vie"
    },
    {
        src: require("../../img/Humour/lesbeauxmalaises.jpg"),
        alt: "Les beaux malaises",
        title: "Les beaux malaises"
    },
    {
        src: require("../../img/Humour/lesbougon.jpg"),
        alt: "Les bougon",
        title: "Les bougon"
    },

    {
        src: require("../../img/Humour/lesboys.jpg"),
        alt: "Les boys",
        title: "Les boys"
    },
    {
        src: require("../../img/Humour/minuitlesoir.jpg"),
        alt: "Minuit le soir",
        title: "Minuit le soir"
    },
]

const tabSeriesAmericaines = [
    {
        src: require("../../img/Series americaines/betterCallSaul.jpg"),
        alt: "Better Call Saul",
        title: "Better Call Saul"
    },

    {
        src: require("../../img/Series americaines/breakingbad.jpg"),
        alt: "Breaking Bad",
        title: "Breaking Bad"
    },

    {
        src: require("../../img/Series americaines/dexter.jpg"),
        alt: "Dexter",
        title: "Dexter"
    },

    {
        src: require("../../img/Series americaines/got.jpg"),
        alt: "Game Of Thrones",
        title: "Game Of Thrones"
    },
    {
        src: require("../../img/Series americaines/mandalorian.jpg"),
        alt: "The Mandalorian",
        title: "The Mandalorian"
    },

    {
        src: require("../../img/Series americaines/vikings.jpg"),
        alt: "Vikings",
        title: "Vikings"
    },

]
 

export class Categorie extends React.Component {
    render() {
        return (
            <>
                <Row>
                    <h1>{this.props.nom}</h1>
                </Row>
                <Row>
                {this.AfficherCategorie()}
                </Row>
            </>
        );
    }
    AfficherCategorie(){
        // Si le nom de la catégorie est suspense, on affiche les éléments les un après les autres grâce au map
        if (this.props.nom === "Suspense"){
            return(
                tabSuspense.map((element,i) =>
                    <TvShow
                        keys={"suspense" + i}
                        src={element.src}
                        alt={element.alt}
                        title={element.title}
                    />)
            )
        }

        if(this.props.nom === "Humour"){
            return(
                tabHumour.map((element,i) =>
                    <TvShow
                        keys={"humour" + i}
                        src={element.src}
                        alt={element.alt}
                        title={element.title}
                    />)
            );

        }

        if(this.props.nom === "Séries Américaines"){
            return(
                tabSeriesAmericaines.map((element, i) =>
                    <TvShow
                        keys={"series americaines" + i}
                        src={element.src}
                        alt={element.alt}
                        title={element.title}
                    />)
            );

        }
    
    }
}

