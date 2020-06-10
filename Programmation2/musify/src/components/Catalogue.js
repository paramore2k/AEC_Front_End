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
import Col from "react-bootstrap/Col";


const tabAlbums = [

    {
        id: "1",
        src: require("../img/paramore-riot.jpg"),
        alt: "Riot",
        src2: require("../img/microphone.jpg"),
        artiste: "Paramore",
        nom_album: "Riot",
        annee_parution: "2002",
        chansons: [
            {
                nom: "01. For A Pessimist I'm Pretty Optimistic",
                lyrics: <>
                    <Row><Col>
                        <p>Just talk yourself up
                            And tear yourself down
                            You've built your one wall
                            Now find your way around
                            What's the problem?
                            You've got a lot of nerve
                        </p>
                        <p>So what did you think I would say?
                            No, you can't run away, you can't run away
                            So what did you think I would say?
                            No, you can't run away, you can't run away
                            You wouldn't</p>
                        <p>I never wanted to say this
                            You never wanted to stay
                            I put my faith in you, so much faith
                            And then you just threw it away
                            You threw it away</p>

                        <p>I'm not so naive
                            My sorry eyes can see
                            The way you fight shy
                            Of almost everything
                            Well, if you give up
                            You'll get what you deserve</p>

                        <p>So what did you think I would say?
                            No, you can't run away, you can't run away
                            So what did you think I would say?
                            No, you can't run away, you can't run away
                            You wouldn't</p>

                        <p>You never wanted to stay
                            I put my faith in you, so much faith
                            And then you just threw it away
                            You threw it away</p>

                        <p>You were finished long before
                            We had even seen the start
                            Why don't you stand up, be a man about it?
                            Fight with your bare hands about it now</p>

                        <p>I never wanted to say this
                            You never wanted to stay, well did you?
                            I put my faith in you, so much faith
                            And then you just threw it away</p>

                        <p>I never wanted to say this
                            You never wanted to stay
                            And I put my faith in you, so much faith
                            And then you just threw it away
                        </p>
                    </Col></Row>
                    </>

            },
            {
                nom: "02. That's What You Get",
                lyrics: <>
                    <Row><Col>
                        <p>No sir, well I don't wanna be the blame, not anymore.
                            It's your turn, so take a seat we're settling the final score.
                            And why do we like to hurt so much?</p>

                        <p>I can't decide
                            You have made it harder just to go on
                            And why, all the possibilities well I was wrong</p>

                        <p>That's what you get when you let your heart win, whoa.
                            That's what you get when you let your heart win, whoa.
                            I drowned out all my sense with the sound of its beating.
                            And that's what you get when you let your heart win, whoa.</p>


                        <p>I wonder, how am I supposed to feel when you're not here.
                            Cause I burned every bridge I ever built when you were here.
                            I still try holding onto silly things, I never learn.
                            Oh why, all the possibilities I'm sure you've heard.</p>

                        <p>That's what you get when you let your heart win, whoa.
                            That's what you get when you let your heart win, whoa.
                            I drowned out all my sense with the sound of its beating (beating)
                            And that's what you get when you let your heart win, whoa.</p>

                        <p>Pain make your way to me, to me.
                            And I'll always be just so inviting.
                            If I ever start to think straight,
                            This heart will start a riot in me,
                            Let's start, start, hey!</p>

                        <p>Why do we like to hurt so much?
                            Oh why do we like to hurt so much?</p>

                        <p>That's what you get when you let your heart win!
                            Whoa.</p>

                        <p>That's what you get when you let your heart win, whoa.
                            That's what you get when you let your heart win, whoa.</p>

                        <p>Now I can't trust myself with anything but this,
                            And that's what you get when you let your heart win, whoa</p>

                    </Col></Row>
                    </>
            },
            {
                nom: "03. Hallelujah",
            },
            {
                nom: "04. Misery Business",
            },
            {
                nom: "05. When It Rains",
            },
            {
                nom: "06. Let the Flames Begin" ,
            },
            {
                nom: "07. Miracle",
            },
            {
                nom: "08. We Are Broken",
            },
            {
                nom: "09. Fences",
            },
            {
                nom: "10. Born forn this"
            }
        ]
    },
    {
        id: "2",
        src: require("../img/godsmack-when_legends_rise.jpg"),
        alt: "Godsmack",
        artiste: "Godsmack",
        nom_album: "When Legends Rise",
        annee_parution: "2019",
        src2: require("../img/microphone.jpg"),
        chansons: [
    {
        nom: "01. When Legends Rise",
        lyrics: <>
            <Row>
                <Col>
                    <p>
                        Legs are tied, these hands are broken
                        Alone I try with words unspoken
                        Silent cry, my breath is frozen
                        With blinded eyes, I fear myself
                    </p>
                    <p>It's burning down, it's burning high
                        When ashes fall the legends rise
                        We burned it out oh my oh why
                        When ashes fall the legends rise</p>

                    <p>Throat is dry, my vision's fading
                        I'm paralyzed and left here waiting
                        Taking time just one step forward
                        Won't lose my mind, I'm here to stay</p>

                    <p>It's burning down, it's burning high
                        When ashes fall the legends rise
                        We burned it out oh my oh why
                        When ashes fall the legends rise</p>

                    <p>Whoa (legends rise)
                        Whoa (legends rise)
                        (Legends rise)</p>


                    <p>It's burning down, it's burning high
                        When ashes fall the legends rise
                        We burned it out oh my oh why
                        When ashes fall the legends rise</p>

                    <p>Whoa (legends rise)
                        Whoa (legends rise)</p>

                </Col>
            </Row>
            </>
    },
    {
        nom: "02. Bulletproof",
        lyrics: <>
            <Row>
                <Col>
                    <p>
                        Contemplating, isolating
                        And it's stressing me out
                        Different visions, contradictions
                        Why won't you let me out?
                    </p>
                    <p>I need a way to separate yeah
                        But I promise you that I'll make sure you never forget me
                        (Never forget me)</p>

                    <p>Now that you want it
                        Now that you need it
                        I'm too far gone
                        You're trying to blame me
                        But I'm not breaking
                        I'm telling you, I'm bulletproof
                        Believe me, I'm bulletproof
                        You make me so bulletproof
                        And now I'm too far gone</p>

                    <p>I need a way to separate yeah
                        But I'm telling you that nothing will ever be the same</p>

                    <p>I'm too far gone
                        You're trying to blame me
                        But I'm not breaking
                        I'm telling you, I'm bulletproof
                        Believe me, I'm bulletproof
                        You make me so bulletproof
                        And now I'm too far gone
                        I'm telling you, I'm bulletproof
                        Believe me, I'm bulletproof
                        You make me so bulletproof
                        And now I'm too far gone</p>
                </Col>
            </Row>
            </>
    },
    {
        nom: "03. Unforgettable",
    },
    {
        nom: "04. Every Part of Me",
    },
    {
        nom: "05. Take it To The Edge",
    },
    {
        nom: "06. Under your scars" ,
    },
    {
        nom: "07. Someday",
    },
    {
        nom: "08. Just one time",
    },
    {
        nom: "09. Say my name",
    },
    {
        nom: "10. Let it out"
    },
]
},
    {
        id: "3",
        src: require("../img/chvrches-love_is_dead.jpg"),
        alt: "CHVRCHES - Love is dead",
        artiste: "CHVRCHES",
        nom_album: "Love is dead",
        annee_parution: "2017",
        chansons: [
            { nom: "01.Graffitiy",
        },
            {
                nom: "02. Get Out",
            },
            {
                nom: "03. Deliverance",
            },
            {
                nom: "04. My Enemy (Feat. Matt Berninger)"
            },
            {
                nom: "05. Forever",

            },
            {
                nom: "06. Never Say Die",
            },

            {
                nom: "07. Graves",
            },
            {
                nom: "08. God's Plan",
            },
    ]

    },
    {
        id: "4",
        src: require("../img/catherine_major-la_maison_du_monde.jpg"),
        alt: "Catherine Major - La Maison Du Monde",
        artiste: "Catherine Major",
        nom_album: "La maison du monde",
        annee_parution: "2016",
        chansons: [
            {
                nom: "01. La luciole"
            },
            {
                nom: "02. Toi"
            },
            {
                nom: "03. Rien du tout"
            },
            {
                nom: "04. Nos délicats"
            },
            {
                nom: "05. Pupille"
            },
            {
                nom: "06. La maison du monde"
            },
            {
                nom: "07. Sable mouvant"
            },
            {
                nom: "08. Chanson urgente"
            },
            {
                nom: "09. Callista"
            },
            {
                nom: "10. Black Jack"
            },
            {
                nom: "11. Vivante"
            },

        ]

    },
    {
        id: "5",
        src: require("../img/phantom.jpg"),
        alt: "Marianas Trench - Phantom",
        artiste: "Marianas Trench",
        src2: require("../img/microphone.jpg"),
        nom_album: "Phantom",
        annee_parution: "2019",
        chansons:[
            {
                nom: "01. Eleonora",
                src: require("../img/microphone.jpg"),
                alt: "Paroles",
                lyrics: <>
                    <Row className={"mt-4"}>
                        <Col className="lyrics">
                            <p>Hey!</p>
                    <p>Do you hear me?</p>
                   <p> Do you hear me now?</p>
                   <p> On a midnight dreary</p>
                   <p> Stay!</p>
                    <p>Stay near me</p>
                    <p>Stay near me now</p>
                   <p> Eleonora, please be here</p>
                    <p>How you tease me?</p>
                  <p>  Eleonora speak</p>
                    <p>It grows so quiet on widow's peak</p>
                    <p>Don't hush</p>
                    <p>Silence shares my madness</p>
                    <p>Eleonora</p>
                        </Col></Row>
                    </>
            },

            {
                nom: "02. Echoes of You (ft. Roger joseph Manning Jr.)",
                src: require("../img/microphone.jpg"),
                lyrics: <>
                    <Row><Col>
                        <p>I've never given into madness
                            Never given into madness
                            I keep my eye on the chamber door
                            But I'm better now than before
                            No I, I never really panicked
                            No I never really panicked
                            You inhale 'til your lungs get sore
                            But that's not who I am anymore</p>

                        <p>But stirs of whispers trail and linger
                            You still haunt the corner of my eye
                            Those remnant faces fleeting traces
                            Of you haunt the corner of my eye</p>

                        <p>Oh! Echoes of you, echoes of you
                            Repeating from the beating of your tell-tale heart
                            Oh! Echoes of you, echoes of you
                            Repeating from the beating of your heart
                            Of your heart, of your heart, woo-oh-ooh
                            Echoes of you, echoes of you
                            Repeating from the beating of your tell-tale heart
                            Oh! Echoes of you, echoes of you
                            Repeating from the beating of your heart
                            Of your heart, of your heart woo-oh-ooh
                            Echoes of you, echoes of you
                            Repeating from the beating of your tell-tale heart
                            Oh! Echoes of you, echoes of you
                            Repeating from the beating of your heart
                            Of your heart, of your heart now</p>

                        <p>You know I tried to make it vanish
                            I just want to make it vanish
                            But the notes of an old mistake
                            Still ring louder every day
                            From a, From a little to a manic
                            A cacophony, a frantic
                            A relentless refrain
                            Is the only thing that remains</p>

                        <p>Well stirs of whispers trail and linger
                            You still haunt the corner of my eye
                            Those remnant faces fleeting traces
                            Of you haunt the corner of my eye</p>


                        <p>Oh! Echoes of you, echoes of you
                            Repeating from the beating of your tell-tale heart
                            Oh! Echoes of you, echoes of you
                            Repeating from the beating of your heart
                            Of your heart, of your heart, woo-oh-ooh
                            Echoes of you, echoes of you
                            Repeating from the beating of your tell-tale heart
                            Oh! Echoes of you, echoes of you
                            Repeating from the beating of your heart
                            Of your heart, of your heart woo-oh-ooh
                            Echoes of you, echoes of you
                            Repeating from the beating of your tell-tale heart
                            Oh! Echoes of you, echoes of you
                            Repeating from the beating of your heart
                            Of your heart, of your heart now (heart now, heart now)</p>

                        <p>Stirs of whispers trail and linger
                            You still haunt the corner of my eye
                            The remnant faces fleeting traces
                            Of you haunt the corner of my eye
                            Stirs of whispers trail and linger
                            You still haunt the corner of my eye
                            The remnant faces fleeting traces
                            Of you haunt the corner of my eye
                            Hey!</p>

                        <p>Can't stop my falling now
                            Who said don't look down
                            Can't stop my falling now
                            Who said, you said don't look down</p>

                        <p>I can't stop myself from falling now
                            Who said, you said don't look down
                            I can't stop myself from falling now
                            Who said, you said don't look down
                            I can't stop myself from falling now
                            Who said, you said don't look down
                            I can't stop myself from falling...</p>

                        <p>I can't stop myself from falling now
                            Who said, you said don't look down
                            I thrust my fist into the post
                            I still insist I see the ghosts
                            I can't stop myself from falling now
                            Don't look down</p>

                        <p>Echoes of you, echoes of you
                            Echoes of you, echoes of you
                            Repeating from the corner of my eye (the corner of my eye)
                            Echoes of you, echoes of you
                            Repeating from the corner of my mind</p>

                    </Col></Row>
                    </>
            },
            {
                nom: "03. Don't Miss Me?"
            },
            {
                nom: "04. Wish You Were Here"
            },
            {
                nom: "05. Your Ghost"
            },
            {
                nom: "06. Glimer"
            },
            {
                nom: "07. I Knew You When"
            },
            {
                nom: "08. The Death of Me"
            },
            {
                nom: "09. The Killing Kind"
            },

        ]
    },

    {
        id: "5",
        src: require("../img/david_jalbert.jpg"),
        alt: "David Jalbert - Le Doigt D'honneur",
        artiste: "David Jalbert",
        nom_album: "Le Doigt D'Honneur",
        annee_parution: "2020",
        chansons: [
            {
                nom: "01. Le doigt d'honneur"
            },

            {
                nom: "02. Y mouille en plein soleil"
            },
            {
                nom: "03. Avec le temps"
            },
            {
                nom: "04. Avec le temps"
            },
            {
                nom: "05. L'amour est ponctuel"
            },
            {
                nom: "06. Une Ballade country"
            },
            {
                nom: "07. La tête sur mon épaule"
            },
            {
                nom: "08. Un p'tit rien"
            },
            {
                nom: "09. Sans larmes et sans adieu"
            },
            {
                nom: "10. L'ombre de nous"
            },

            {
                nom: "11. Nashville, Tennesse"
            }
        ]
    },
    {
        id: "6",
        src: require("../img/roxane_bruneau.jpg"),
        alt: "Roxane Bruneau - Dysphorie",
        artiste: "Roxane Bruneau",
        nom_album: "Dysphorie",
        annee_parution: "2019",
        chansons:[
            {
                nom: "01. J’suis pas stressé"
            },

            {
                nom: "02. Notre belle démence"
            },
            {
                nom: "03. J’feel fourmis"
            },
            {
                nom: "04. Les dix doigts"
            },
            {
                nom: "05. Notre belle romance"
            },
            {
                nom: "06. Le Secret"
            },
            {
                nom: "07. Le Blues du Musicien"
            },
            {
                nom: "08. Diagnostic"
            },
            {
                nom: "09. Qu’est ce que t’en penses"
            },

        ]
    },

    {
        id: "7",
        src: require("../img/skillet.jpg"),
        alt: "Skillet - Victorious",
        artiste: "Skillet",
        nom_album: "Victorious",
        annee_parution: "2019",
        chansons:[
            {
                nom: "01. Legendary"
            },

            {
                nom: "02. You Ain't Ready"
            },
            {
                nom: "03. Victorious"
            },

            {
                nom: "04. This Is The Kingdom"
            },

            {
                nom: "05. Save Me"
            },
            {
                nom: "06. Rise Up"
            },
            {
                nom: "07. Terrify the Dark"
            },
            {
                nom: "08. Never Going Back"
            },
            {
                nom: "09. Reach"
            },
            {
                nom: "10. Anchor"
            },
            {
                nom: "11. Finish Line"
            },
            {
                nom: "12. Back to Life"
            },

        ]
    }
]




export class Catalogue extends React.Component {

    constructor(props) {
        super(props);
        this.state = {listeAlbums: tabAlbums, hovered: false, albumClick: -1, SingleAlbum: false, rechercher: false};

    }

    // Affichage des albums

    // On applique l'état du single albun à faux pour faire afficher tout le catalogue
    afficherAlbums() {
        this.setState({SingleAlbum: false});
        this.props.afficherCatalogue(true);
    }

    render() {
        // SI l'état un album seul, donc si on clique sur un album
        if (this.state.SingleAlbum) {
            return <SingleAlbum back={() => this.afficherAlbums()} album={tabAlbums[this.state.albumClick]}/>
        }
        // Sinon on retourne tous les albums
        else {
            return (<Row>
                {/* Condition pour rechercher incluant le nom de l'artiste ou le nom de l'album */}
                {tabAlbums.map((element, i) => ( element.nom_album.toLowerCase().includes(this.props.recherche.toLowerCase()) || element.artiste.toLowerCase().includes(this.props.recherche.toLowerCase()) ) &&

                    <Album
                        key={"album" + i}
                        id={element.id}
                        src={element.src}
                        nom={element.nom_album}
                        artiste={element.artiste}
                        annee={element.annee_parution}
                        alt={element.alt}
                        SingleAlbum={() => this.setState({SingleAlbum: true, albumClick: i})}
                        onClick={(e) => this.props.onClick(e)}
                    >
                    </Album>
                )}
            </Row>);

        }
    }
}





