import { useParams } from "react-router-dom"
import { getCharacter } from "../../managers/CharacterManager"

export const Game = () => {
    const [ gameLog, setGameLog ] = useState("")
    const { gameId } = useParams()
    const { character, setCharacter } = useState({})

    useEffect(
        () => {
            getCharacter(gameId).then(setCharacter)
            
        },
        []
    )

    // STEPS:
    // 1. Use use params to get game/character id
    // 2. Do a fetch call to get that game information -> save that in state
    // 3. Get character inventory along with this -> save in another state variable
    // 4. Once we have those data, use character_current_situation to get situation and associated choices that fit passing criteria on gameflow page. 
    // 5. Display current situation text and choices
    // 6. Once a choice is selected

    return <>gameplay is gonna happen here</>
}