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
        fetch('https://cannabis-collection.herokuapp.com/api/v1/types')
        .then(resp => resp.json())
        .then(types => dispatch(setTypes(types.data)))
    }
}