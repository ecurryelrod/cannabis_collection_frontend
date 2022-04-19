// synchronous actions
export const setStrains = strains => {
    return {
        type: 'SET_STRAINS',
        strains
    }
}

// asynchronous actions
export const fetchStrains = () => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/api/v1/strains')
        .then(resp => resp.json())
        .then(strains => {
            if (strains.error) {
                alert(strains.error)
            } else {
                dispatch(setStrains(strains.data))
            }
        })
    }
}