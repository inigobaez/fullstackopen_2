

const PersonForm = ({ newName, newNumber, addContact, nameHandler, numberHandler }) => {
    return (
        <>
            <h3>Add new contact</h3>
            <form onSubmit={addContact}>
                <div>
                    name:
                    <input type='text' value={newName} onChange={nameHandler} />
                </div>
                <div>
                    number:
                    <input type='text' value={newNumber} onChange={numberHandler} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>

    )
}

export default PersonForm