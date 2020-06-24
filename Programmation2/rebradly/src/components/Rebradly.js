/**
 * Créé par David Champagne
 * 2020/06/23
 *
 */
import React from "react";


export class Rebradly extends React.Component {

    constructor(props) {
        super(props);
        this.setState = {
            error: null,
            isLoaded: false,
            data: []}
    }

    componentDidMount() {

        const apiKey = "2a3f902defd84dfb957f3fa50d0bacbc";


        const getData = async () => {

            try{
                const response = await fetch('https://api.rebrandly.com/v1/links', {

                    method:'POST',

                    headers: {
                        'Content-Type': 'application/json',
                        'apikey': apiKey

                    },

                    body:JSON.stringify({id: 200})

                });

                if(response.ok){

                    const jsonResponse = await response.json();

                    return jsonResponse;

                }

                throw new Error('Request failed!');

            }

            catch(error){

                console.log(error);

            }

        }

    }
    render() {
        return (
            <h1 id="petitURL">Texte a changer</h1>
        );




    }

}




export default Rebradly;