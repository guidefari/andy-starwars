// REDUCER
export const populateCharactersReducer = (state = { }, action) => {
    switch(action.type){
        case 'POPULATE':
            return action.payload 
        default:
            return state
    }
}