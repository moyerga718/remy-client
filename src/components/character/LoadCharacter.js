import { getUserCharacters } from "../../managers/CharacterManager"
import { useState, useEffect } from "react"
import { CharacterRadioButton } from "./CharacterRadioButton"
import { Link } from "react-router-dom"

export const LoadCharacter = ({userId}) => {
    const [ characters, setCharacters] = useState([])
    const [ selectedCharacter, setSelectedCharacter] = useState(0)

    useEffect(
        () => {
            getUserCharacters().then(setCharacters)
        },
        []
    )

    return <>
        <p>Choose a game.</p>

        <div className = "character-selection-div">
            <div className="character-button-container">
                {
                    characters.map(character => <CharacterRadioButton key={`character--${character.id}`}
                        character={character}
                        setSelectedCharacter={setSelectedCharacter}
                    />)
                }
            </div>
        </div>

        {
            (selectedCharacter)
            ? <Link to={`/game/${selectedCharacter}`}>Load Game</Link>
            : <></>
        }
    
    </>
}