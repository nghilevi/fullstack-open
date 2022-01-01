import React, { useState, useEffect } from 'react'

import Filter from './components/Filter'
import Persons from './components/Persons'
import Form from './components/Form'
import Notification from './components/Notification'

import peopleService from './services/PeopleService'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchValue, setSearchValue] = useState('');
  const [ message, setMessage] = useState({});

  useEffect(() => {
    peopleService.getAll()
      .then(personsData => setPersons(personsData))
  }, [])
    
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {name: newName, number: newNumber}
    const found = persons.find((person) => person.name === newName )
    if(found){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)){
        peopleService.update(found.id, newPerson).then((updatedPerson) => {
          setPersons(persons.map( person => {
            if(person.name === updatedPerson.name){
              return updatedPerson
            }
            return person
          }))
          showNotfication({
            data: newPerson.name,
            type: 'success'
          })
        })
        .catch( (err) => {
          showNotfication({
            data: newPerson.name,
            type: 'err'
          })
        })
      }
    }else{
      peopleService.create(newPerson).then(() => {
        setPersons(persons.concat([newPerson]))
        showNotfication({
          data: newPerson.name,
          type: 'success'
        })
      })
    }
    setNewName('')
    setNewNumber('')
  }

  const showNotfication = (message) => {
    setMessage(message)
    setTimeout( () => setMessage(''), 2000)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (evt) => {
    setSearchValue(evt.target.value)
  }

  const handleRemove = (id) => {
    peopleService.remove(id).then(() => {
      setPersons(persons.filter( (person) => person.id !== id))
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
      <Filter handleFilter={handleFilter}/>
      <Form newName={newName} 
      newNumber={newNumber} 
      onSubmit={addPerson} 
      handleNameChange={handleNameChange} 
      handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} searchValue={searchValue} handleRemove={handleRemove} />
    </div>
  )
}

export default App