
import React , {useState, useEffect} from 'react';
import LocationCard from '../../components/LocationCard/LocationCard';
import { bringLocation } from '../../services/apiCalls';
import './Locations.css';
 
const Locations = () => {

    const [search, setSearch] = useState('');
    const [location, setLocation] = useState({});

    const inputHandler = (e) => {
        
        setSearch(e.target.value);
    }

    useEffect(()=>{

        if(search !== ''){

            //Here I would call the function at the service....
            bringLocation(search)
                .then(answer => {

                    setLocation(answer.data);
                })
                .catch(error => console.log(error));

        } else if (search === '') {

            setLocation({});
        }
    },[search])


     return (
         <div className='locationsDesign'>
            <input name='search' placeholder='Search a location number...' onChange={(e)=>inputHandler(e)}/>

            {
                location.id !== undefined &&

                <LocationCard location={location}/>
            }
         </div>
     )
}
export default Locations;