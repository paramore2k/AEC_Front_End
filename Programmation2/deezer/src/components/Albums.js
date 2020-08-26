/**
 * Créé par David Champagne
 * 2020/07/31
 *
 */

import axios from 'axios';
const API_KEY = '48298e718cmsh2aa6d92ef8b706bp1ccfe0jsnd64e1b450a13';

const request = axios.create({
    baseURL : 'https://deezerdevs-deezer.p.rapidapi.com',
    headers : {'X-RapidAPI-Key': API_KEY}
});


export function getAlbums(search = 'a'){
    const albums = request.get(`search/album?q="${search}&limit=32`)
        .then(response => response.data.data)
        .catch(error => console.log(error));
    return albums
}

export function getAlbum(id){
    const album = request.get(`album/${id}`)
        .then(response => response.data)
        .catch(error => console.log(error));
    return album
}

