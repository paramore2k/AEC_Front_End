import React from 'react';
import netflix from './img/netflix.png';
import michaelImage from './img/michaeljordan.jpg';
import dennisImage from './img/dennisrodman.jpg';
import billImage from './img/billwennington.png';
import scotImage from './img/scottiepipen.jpg';
import steveImage from './img/stevekeer.jpg';
import './App.css';
let nombreAlt = Math.floor(Math.random() * 5);


/* Tableau regroupant les 5 joueurs */
const nomJoueurs = ["Michael Jordan","Dennis Rodman", "Bill Wennington", "Scottie Pipen", "Steve Keer"];
/* Tableau pour les images des joueurs */

const imgJoueurs = [michaelImage, dennisImage, billImage, scotImage, steveImage];

let imageActive = imgJoueurs[nombreAlt];
let nomJoueurImage = nomJoueurs[nombreAlt];

/* Bouton pour le changement de joueur */

const boutonchangerJoueur =(
    <button id="changerJoueurBtn" type="button" onClick={changerJoueur}>Changer de joueur</button>
);

/* Source de l'image pour le joueur choisie de manière random */


/* Liste des joueurs à afficher version MAP */

const listeEnMap = nomJoueurs.map((element,i) => (
    <li key={"element" + i}>{element}</li>
))

/* Liste des joueurs à afficher version && */

const listeEnCondition = (
    <ul>
        {nombreAlt !== 0 && <li>{nomJoueurs[0]}</li>}
        {nombreAlt !== 1 && <li>{nomJoueurs[1]}</li>}
        {nombreAlt !== 2 && <li>{nomJoueurs[2]}</li>}
        {nombreAlt !== 3 && <li>{nomJoueurs[3]}</li>}
        {nombreAlt !== 4 && <li>{nomJoueurs[4]}</li>}
    </ul>
);
function changerJoueur() {

    let liste = document.getElementById("listeCachee");
    liste.style.display = "none";

    nombreAlt = Math.floor(Math.random() * 5);
    let photoJoueur = document.getElementById("photoJoueur");
    let nomJoueur = document.getElementById("nomJoueur");

    photoJoueur.setAttribute("src",imgJoueurs[nombreAlt]);
    nomJoueur.innerHTML = nomJoueurs[nombreAlt];

}

function App() {
  return (
    <div className="textAfficher">

        <h1>THE LAST DANCE</h1>
        <p>Une production de</p>
        <img src={netflix} alt={"Logo Netflix"} />
        <p>Mettant en vedette</p>
        <h2 id="nomJoueur">{nomJoueurImage}</h2>
        <img
        alt={imageActive}
        id = "photoJoueur"
        className = "photoJoueur"
        src={imageActive}/>

        <h2>Le 5 partants affichés avec MAP()</h2>
        <ul>{listeEnMap}</ul>
        <h2 id="listeCachee">Les 4 partants affichés avec &&</h2>
        {listeEnCondition}
        {boutonchangerJoueur}
    </div>
  );
}

export default App;
