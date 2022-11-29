
import React from 'react';
import { useCharacterContext } from '../../providers/CharacterProvider';
import './CharacterDetail.css';

const CharacterDetail = () => {

    const character = useCharacterContext();

    return (
        <div className='characterDetailDesign'>

            {character.id !== undefined &&
            
                <div>{character.name}</div>
            }
        </div>
    )
}

export default CharacterDetail;