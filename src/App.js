import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { populate } from './actions/characterActions'



const App = () => {
    const dispatch = useDispatch()
    const charactersList = useSelector(state => state.characters)
    const {loading, characters} = charactersList
    !loading && console.log(characters)
    
    useEffect(() => {
        dispatch(populate())
    }, [dispatch])
    
    return (
        <div>
            <h1>WYSIWYG</h1>
            <div className="container">
                {!loading  && (
                    <div>
                        {characters.map((character) => {
                            <h4>{character.name}</h4>
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default App

// { loading ? (
// <div>loading</div>
// ) : (
//     <div>
//         {/* {characters.results.map(character =>
//             <h4>{character.name}</h4>
//         )} */}
//     </div>
    
// )}