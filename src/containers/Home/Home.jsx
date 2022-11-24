import React, { useEffect, useState } from "react";
import './Home.css';

import { bringCharacters } from "../../services/apiCalls";

const Home = () => {
    //useState is for HOOKS
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState('');
    //useEffect is for LIFECYCLE METHODS

    // useEffect(()=>{
    //     //This useEffect is going to be executed when the component is mounted for the first time


    // },[]);

    useEffect(() => {

        if (characters.length === 0) {

            //As the array of the hook is empty...I call for the characters
            bringCharacters()
                .then(
                    answer => {

                        setCharacters(answer.data.results);
                    }
                )
                .catch(error => {
                    if (error.response.status === 404) {
                        setError("Invalid endpoint call, bad url");
                    }
                });
        }

    }, [characters]);

    // useEffect(()=>{
    //     //This useEffect is going to be executed EVERY TIME the a hook changes or the component is updated

    // });

    //2nd step, renders the component

    return (
        <div className='homeDesign'>
            {
                characters.length > 0 &&
                //Time to map the characters.........
                characters.map(monster => {
                    return (
                        <div className='mapCharactersDesign' key={monster.id}>{monster.name}</div>
                    )
                })
            }

            {error}
        </div>
    )

}

export default Home;