import { useParams } from "react-router-dom"
import { getCharacter } from "../../managers/CharacterManager"
import { getCurrentSituation } from "../../managers/SituationManager"
import { useState, useEffect } from "react"
import "./Game.css"

export const Game = () => {
    const [ gameLog, setGameLog ] = useState("")
    const { characterId } = useParams()
    const [character, setCharacter ] = useState({})
    const [situation, setSituation] = useState({})

    useEffect(
        () => {
            if (characterId) {
                getCharacter(characterId).then(setCharacter)
            }
        },
        []
    )

    useEffect(
        () => {
            if (character.current_situation) {
                getCurrentSituation(character?.current_situation?.id, characterId).then(setSituation)
            }
        },
        [character]
    )

    const handleSelection = (outcomeId) => {
        // WHEN A SELECTION IS MADE - 
        // 1. send choice ID and character ID to characterChoice view to flip that choice to true.
        // 2. Update inventory and current situation for character 
            // send characterId, outcomeId, and (maybe) item Id to backend
            // Send new_item ID to character view to add that id to character items
        // 3. Get character using characterId. 
        // 4. This should trigger use effect to update current 
        getCurrentSituation(outcomeId, characterId).then(setSituation)

    }


    return <>
        {
            (situation.choice_data)
            ?<div>
                <p>{situation?.situation_data?.text}</p>
                <div className="choice-container">
                {
                    situation?.choice_data.map(choiceObj => <p className ="option-text" onClick={() => handleSelection(choiceObj?.outcome_situation)}>{'> '}{choiceObj.text}</p>)
                }
            </div>
            </div>
            :<></>
        }
    </>
}