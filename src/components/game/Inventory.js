export const Inventory = (character) => {
    return <div>
        <p>Inventory:</p>
        {
            (character.items)
            ? <>
            <p>items here</p>
                {
                    character?.items.map( item => <p>{item.name}</p>)
                }
            </>
            : <></>
        }
    </div>
}