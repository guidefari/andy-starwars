import React from 'react'

const CharacterCard = ({character: {name, height, mass, birth_year}}) => {
    return (
        <div className='card'>
            <h3>Name: {name}</h3>
            <h3>Height: {height}cm</h3>
            <h3>Mass: {mass}kg</h3>
            <h3>Birth Year: {birth_year}</h3>
        </div>
    )
}

export default CharacterCard

// name, height, mass and year of birth.