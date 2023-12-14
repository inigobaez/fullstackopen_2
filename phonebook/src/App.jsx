
import personService from './services/persons'

import SearchFilter from './components/SearchFilter'
import ContactList from './components/ContactList'
import { useEffect, useState } from 'react'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('');
  const [notification, setNotification] = useState(null)


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
  const replaceNumber = (person) => {
    const personWithNewNumber = { ...person, number: newNumber }
    personService.update(personWithNewNumber).then(updatedPerson => {
      const notUpdatedPersons = persons.filter(p => p.id !== updatedPerson.id);
      const newPersons = notUpdatedPersons.concat(updatedPerson)
      setPersons(newPersons)
      notify({ isError: false, message: `${updatedPerson.name}'s number changed to ${updatedPerson.number}` })
      resetForm()
    }).catch(error => {
      if (error.response.status === 404) {
        notify({ isError: true, message: `Information of ${personWithNewNumber.name} has already been removed from server` })
      }
    })
  }
  const handleRepeatedPerson = (person) => {
    if (person.number === newNumber) {
      return alert('this person with the provided name and numeber already exists')
    }
    if (window.confirm(`${person.name} is already added to phonebook, replace the old number with the new one?`))
      return replaceNumber(person)

  }
  const addContact = (event) => {
    event.preventDefault();

    if (newName === '' || newNumber === '') {
      return alert('both name and number are mandatory')
    }
    const repeatedPerson = persons.find(p => p.name === newName)
    if (repeatedPerson !== undefined) {
      return handleRepeatedPerson(repeatedPerson)
    }

    personService.create({ name: newName, number: newNumber })
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
        notify({ isError: false, message: `Added ${newPerson.name}` })
      }).catch(error => console.log(error))

    resetForm()
  }
  const deletePerson = (id) => {
    const personToBeDeleted = persons.find(p => p.id === id);
    if (!personToBeDeleted) return;

    if (window.confirm(`Do you really want to delete ${personToBeDeleted.name}?`)) {
      personService.deletePerson(id);
      setPersons(persons.filter(p => p.id !== id))
    }
  }
  const notify = (notification) => {
    setNotification(notification)
    setTimeout(() => { setNotification(null) }, 5000)
  }
  useEffect(() => {

    console.log('effect')
    personService.getAll()
      .then(persons => setPersons(persons))
      .catch(error => console.log(error))
  }, [])
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <SearchFilter filter={filter} onChange={filterHandler} />
      <PersonForm newName={newName} newNumber={newNumber} addContact={addContact} nameHandler={nameHandler} numberHandler={numberHandler} />
      <ContactList filteredPersons={filteredPersons} deletePerson={deletePerson} />
    </div>
  )
}

export default App