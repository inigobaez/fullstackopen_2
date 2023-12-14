import Contact from './Contact'

const ContactList = ({ filteredPersons, deletePerson }) => {
    return (
        <>
            <h2>Numbers</h2>
            <ul>
                {filteredPersons.map((p) => <Contact key={p.id} person={p} deletePerson={deletePerson} />)}
            </ul>
        </>

    )
}

export default ContactList