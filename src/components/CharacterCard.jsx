import React from 'react'

const CharacterCard = ({character: {name, height, mass, birth_year}}) => {
    return (
        <div className='card'>
            <h3 className='character-name'>{name}</h3>
            <ul className='character-stats'>
                <li>Height: <strong style={{fontSize: '1.3rem'}}>{height}cm</strong></li>
                <li>Mass: <strong style={{fontSize: '1.3rem'}}>{mass}kg</strong></li>
                <li>Birth Year: <strong style={{fontSize: '1.3rem'}}>{birth_year}</strong></li>
            </ul>
        </div>
    )
}

export default CharacterCard

// name, height, mass and year of birth.