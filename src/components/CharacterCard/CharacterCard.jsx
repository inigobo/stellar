import React from 'react';
import {useNavigate} from 'react-router-dom';
import './CharacterCard.css';

// I import the method to write on the context
import { useCharacterChangeContext } from '../../providers/CharacterProvider';
 
const CharacterCard = ({value}) => {

    const navigate = useNavigate();

    const characterChange = useCharacterChangeContext();

    const goDetail = () => {

        //First step, I update the context with the data of the selected character

        characterChange(value);

        setTimeout(()=>{

            navigate('/detail');

        },200);

    }

     return (
         <div className='characterCardDesign' onClick={()=>goDetail()}>
            <div><img className='characterAvatar' src={value.image} alt={value.name}/></div>
            <div>{value.name}</div>
            <div>{value.species}</div>
         </div>
     )
}
export default CharacterCard;