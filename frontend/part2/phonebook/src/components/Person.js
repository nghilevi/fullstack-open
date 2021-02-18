import React from 'react'

const Person = ({person, handleRemove}) => {

    const deletePerson = () => {
        if (window.confirm(`Delete ${person.name}?`)) {
            handleRemove(person.id)
        }
    }

    return (
        <p>{person.name} {person.number} <button onClick={deletePerson}>delete</button></p>
    )
}

export default Person