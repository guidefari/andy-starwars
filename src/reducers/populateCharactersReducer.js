// REDUCER
export const populateCharactersReducer = (state = { }, action) => {
    switch(action.type){
        case 'POPULATE_REQUEST':
            return {loading: true, characters: {}} 
        case 'POPULATE':
            return {loading: false, characters: action.payload} 
        default:
            return state
    }
}