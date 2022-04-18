export const fetchTypes = () => {
    return dispatch => {
        dispatch({type: 'ADD_TYPES'})
        fetch('http://127.0.0.1:3000/api/v1/types')
        .then(resp => resp.json())
        .then(types => dispatch({type: 'ADD_TYPES', types}))
    }
}