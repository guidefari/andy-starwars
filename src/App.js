import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { populate } from './actions/characterActions'



const App = () => {
    const dispatch = useDispatch()
    const {characters} = useSelector(state => state.characters)
    // characters.loading === 'false' && console.log(characters.results)
    
    useEffect(() => {
        dispatch(populate())
    }, [dispatch])
    
    return (
        <div>
            <h1>WYSIWYG</h1>
            <div className="container">
                {/* {data.results.map((character) => (
                    <h4>{character.name}</h4>
                ))} */}
            </div>
        </div>
    )
}

export default App
