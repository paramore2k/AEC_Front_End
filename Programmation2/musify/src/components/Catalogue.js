/**
 * Créé par David Champagne
 * 2020/05/19
 *
 */
import React from "react";

import Row from "react-bootstrap/Row";
import {Album} from "./Album";
import './Catalogue.css';
import {SingleAlbum} from "./SingleAlbum";


const tabAlbums = [

    {
        id: "1",
        src: require("../img/paramore-riot.jpg"),
        alt: "Riot",
        artiste: "Paramore",
        nom_album: "Riot",
        annee_parution: "2002",
        chansons: `<ul>
                        <li>
                        1. For A Pessimist I'm Pretty Optimistic
                        2. That's What You Get
                        3. Hallelujah
                        4. Misery Business
                        5. When It Rains
                        6. Let The Flames Begin
                        7. Miracle
                        8. Cruchcrushcrush
                        9. We Are Broken
                        10. Fences
                        11. Born For This
                        </li>
                    </ul>    
`
    },
    {
        id: "2",
        src: require("../img/godsmack-when_legends_rise.jpg"),
        alt: "Godsmack",
        artiste: "Godsmack",
        nom_album: "When Legends Rise",
        annee_parution: "2019",
        chansons: `<ul>
                        <li>
                        1. When Legends Rise
                        2. Bulletproof
                        3. Unforgettable
                        4. Every Part Of Me
                        5. Take It To The Edge
                        6. Under Your Scars
                        7. Someday
                        8. Just One Time
                        9. Say My Name
                        10. Let it Out
                        11. Eye Of The Storm
                       </li>
                    </ul>`
    },
    {
        id: "3",
        src: require("../img/chvrches-love_is_dead.jpg"),
        alt: "CHVRCHES - Love is dead",
        artiste: "CHVRCHES",
        nom_album: "Love is dead",
        annee_parution: "2017",
        chansons: `<ul>
                        <li>
                        1. Graffiti
                        2. Get Out
                        3. Deliverance
                        4. My Enemy [feat. Matt Berninger]
                        5. Forever
                        6. Never Say Die
                        7. Miracle
                        8. Graves
                        9. Heaven/Hell
                        10. God's Plan
                        11. Really Gone
                        12. ii
                        13. Wonderland
                        </li>
                    </ul>
                    `
    },
    {
        id: "4",
        src: require("../img/catherine_major-la_maison_du_monde.jpg"),
        alt: "Catherine Major - La Maison Du Monde",
        artiste: "Catherine Major",
        nom_album: "La maison du monde",
        annee_parution: "2016",
        chansons: `<ul id="chansons">
                        <li>
                    1. La Luciole
                    2. Toi
                    3. Rien du tout
                    4. Nos délicats
                    5. Pupille
                    6. La maison du monde
                    7. Sable mouvant
                    8. Chanson urgente
                    9. Callista
                    10. Black Jack
                    11. Vivante
                        </li>
                    </ul>`
    },
    {
        id: "5",
        src: require("../img/phantom.jpg"),
        alt: "Marianas Trench - Phantom",
        artiste: "Marianas Trench",
        nom_album: "Phantom",
        annee_parution: "2019",
        chansons: `
                <ul>
                    <li>1. Eleonora
                    2. Only The Lonely Survive
                    3. Echoes of You (ft. Roger joseph Manning Jr.)
                    4. Don't Miss Me?
                    5. Wish You Were Here
                    6. Your Ghost
                    7. Glimmer
                    8. I Knew You When
                    9. The Death of Me
                    10. The Killing Kind 
                    </li>
                </ul>`
    }
]


export class Catalogue extends React.Component {

    constructor(props) {
        super(props);
        this.state = {listeAlbums: tabAlbums, hovered: false, albumClick: -1, SingleAlbum: false};

    }

    // Affichage des albums


    afficherAlbums() {
        this.setState({SingleAlbum: false});
        this.props.afficherCatalogue(true);

    }

    // listeAlbums() {
    //     return (<Row>
    //
    //         {tabAlbums.map((element, i) =>
    //             <Album
    //                 key={"album" + i}
    //                 id={element.id}
    //                 src={element.src}
    //                 nom={element.nom_album}
    //                 artiste={element.artiste}
    //                 annee={element.annee_parution}
    //                 chansons={element.chansons}
    //                 alt={element.alt}
    //                 SingleAlbum={() => this.setState({SingleAlbum: true, albumClicked: i})}
    //                 onClick={(e) => this.props.onClick(e)}
    //             >
    //             </Album>
    //         )}
    //     </Row>)
    //
    // }


    render() {
        if (this.state.SingleAlbum) {
            return <SingleAlbum back={() => this.afficherAlbums()} album={tabAlbums[this.state.albumClicked()]}/>
        } else {
            return (<Row>

                {tabAlbums.map((element, i) =>
                    <Album
                        onClick={(e) => this.props.onClick(e)}
                        key={"album" + i}
                        id={element.id}
                        src={element.src}
                        nom={element.nom_album}
                        artiste={element.artiste}
                        annee={element.annee_parution}
                        chansons={element.chansons}
                        alt={element.alt}
                        SingleAlbum={() => this.setState({SingleAlbum: true, albumClicked: i})}

                    >
                    </Album>
                )}
            </Row>)

        }
    }
}





