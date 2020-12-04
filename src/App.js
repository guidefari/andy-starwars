import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios'

// DISPATCH

 
function App() {
    const dispatch = useDispatch()
    
    // ACTION
    const populate = (data) => {
        return {
            type: 'POPULATE',
            payload: data,
        }
    }
    
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/').
        then( function(response){
            console.log(response)
            dispatch(populate(response))
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
