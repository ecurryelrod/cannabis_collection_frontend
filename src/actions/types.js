// synchronous actions
export const setTypes = types => {
    return {
        type: 'SET_TYPES',
        types
    }
}

// asynchronous actions
export const fetchTypes = () => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/api/v1/types')
        .then(resp => resp.json())
        .then(types => dispatch(setTypes(types.data)))
    }
}