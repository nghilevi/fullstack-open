import React from 'react'
import Person from './Person'

const Persons = ({persons, searchValue, handleRemove}) => {

    const filterPersons = (list, value) => {
        return list.filter(person => person.name.toUpperCase() === value.toUpperCase())
    }
    
    const populatePersonRow = (person) => <Person key={person.name} person={person} handleRemove={handleRemove} />

    return (
        <>
        {
            searchValue ? filterPersons(persons, searchValue).map(populatePersonRow) : persons.map(populatePersonRow)
        }
        </>
    )
}

export default Persons