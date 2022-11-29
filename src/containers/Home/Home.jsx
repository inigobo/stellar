
import React, {useState, useEffect} from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { bringCharacters } from '../../services/apiCalls';

import './Home.css';

const Home = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(()=>{

        if(characters.length === 0){

            bringCharacters()
                .then(
                    res => {
                        
                        //we store the results at the hook...
                        setCharacters(res.data.results)
                    }
                )
                .catch(error => console.log(error));

        }

    },[characters])

    return (
        <div className='homeDesign'>
            <div className='monstersWrap'>
            {
                characters.length > 0 &&

                characters.map(
                    monster => {
                        return(
                            
                                <CharacterCard value={monster} key={monster.id}/>
                            
                        )
                    }
                )
            }
            </div>
        </div>
    )
}

export default Home;