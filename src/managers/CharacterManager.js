export const createNewCharacter = (characterObj) => {
    return fetch('http://localhost:8000/characters', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(characterObj)
    })
        .then(response => response.json())
}

export const getUserCharacters = () => {
    return fetch('http://localhost:8000/characters/my_characters', {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(response => response.json())
}