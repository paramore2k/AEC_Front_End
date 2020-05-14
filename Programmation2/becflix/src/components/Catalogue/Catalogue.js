/**
 * Créé par David Champagne
 * 2020/05/07
 *
 */
import React from "react";

import { Categorie } from "../Categorie/Categorie";


export class Catalogue extends React.Component {
    render() {

        return (
            <>
                <Categorie nom="Suspense"/>
                <Categorie nom="Humour"/>
                <Categorie nom="Séries Américaines"/>
                <Categorie nom=""></Categorie>
                <Categorie/>
                <Categorie/>

            </>
        );
    }

}