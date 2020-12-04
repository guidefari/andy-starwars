import axios from 'axios'

export const populate = () => async (dispatch) => {
    try {
        dispatch({type: 'POPULATE_REQUEST'})

        //How to destructure this data object?
        const {data} = await axios.get('https://swapi.dev/api/people/')
        // console.log(data)

        dispatch({
            type: 'POPULATE',
            payload: data
        })

    } catch (error) {
        console.log(error)
    }
}

// ACTION
// export const populate = (data) => {
//     return {
//         type: 'POPULATE',
//         payload: data,
//     }
// }
