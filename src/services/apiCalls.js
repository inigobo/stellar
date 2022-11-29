import axios from "axios";

var root = 'http://rickandmortyapi.com/api';

export const bringCharacters = async () => {

    let config = {
        method: 'get',
        url: `${root}/character`
    }
    return await axios(config);

};

export const bringSingleCharacter = async (endpoint) => {

    let config = {
        method: 'get',
        url: endpoint
    }
    
    return await axios(config);
    
};

export const bringLocation = async (search) => {

    let config = {
        method: 'get',
        url: `${root}/location/${search}`
    }

    return await axios(config);
};