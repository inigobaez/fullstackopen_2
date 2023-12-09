import Contact from './Contact'

const ContactList = ({ filteredPersons }) => {
    return (
        <>
            <h2>Numbers</h2>
            <ul>
                {filteredPersons.map((p) => <Contact key={p.name} person={p} />)}
            </ul>
        </>

    )
}

export default ContactList