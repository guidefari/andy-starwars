import React, { useEffect } from 'react'
import axios from 'axios'

function App() {
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/').
        then( function(response){
                console.log(response)
            }
        )
        .catch(function(error) {
            console.log(error)
        })
    })
    
    return (
        <div>
            <h1>WYSIWYG</h1>
        </div>
    )
}

export default App
