
import React, {useState, useContext} from 'react';

//This first context is made in order to read the character
const characterContext = React.createContext();

//This second context is made to change the character once is selected
const characterChangeContext = React.createContext();

//We will use this to connect our containers/components to this context
export const useCharacterContext = () => {
    return useContext(characterContext)
};

//At last, we will use this context to update the character
export const useCharacterChangeContext = () => {
    return useContext(characterChangeContext)
};


export const CharacterProvider = (props) => {

    //This hook lets the provider have the data to make it available
    const [character, setCharacter] = useState(null);

    const characterChange = (selected) => {
        setCharacter(selected)
    }


    return (
        <characterContext.Provider value={character}>
            <characterChangeContext.Provider value={characterChange}>
                {/* By wrapping props.children, we are ensuring all sons of this CharacterProvider will be able to use this context */}
                {props.children}
            </characterChangeContext.Provider>
        </characterContext.Provider>
    )

}