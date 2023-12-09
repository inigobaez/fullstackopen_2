
import SearchFilter from './components/SearchFilter'
import ContactList from './components/ContactList'
import { useState } from 'react'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('');
  const filteredPersons = filter === '' ? persons : persons.filter(p => p.name.toLowerCase().indexOf(filter) !== -1)
  const filterHandler = (event) => {
    setFilter(event.target.value);
  }
  const nameHandler = (event) => {
    setNewName(event.target.value);
  }
  const numberHandler = (event) => {
    setNewNumber(event.target.value);
  }
  const resetForm = () => {
    setNewName('');
    setNewNumber('');
  }
  const addContact = (event) => {
    event.preventDefault();
    const repeatedName = persons.findIndex(p => p.name === newName) !== -1
    if (newName === '' || newNumber === '') {
      return alert('both name and number are mandatory')
    }
    if (repeatedName) {
      return alert(`${newName} is already added to phonebook`)
    }
    const repeatedNumber = persons.findIndex(p => p.number === newNumber) !== -1
    if (repeatedNumber) {
      return alert(`${newNumber} is already added to phonebook`)
    }
    setPersons(persons.concat({ id: persons.length + 1, name: newName, number: newNumber }))
    resetForm()
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter filter={filter} onChange={filterHandler} />
      <PersonForm newName={newName} newNumber={newNumber} addContact={addContact} nameHandler={nameHandler} numberHandler={numberHandler} />
      <ContactList filteredPersons={filteredPersons} />
    </div>
  )
}

export default App