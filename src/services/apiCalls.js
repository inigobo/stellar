import axios from "axios";

var root = 'http://rickandmortyapi.com/api'

export const bringCharacters = async () => {

    let config = {
        method: 'get',
        url: `${root}/characters`
    }
    return await axios(config);

};