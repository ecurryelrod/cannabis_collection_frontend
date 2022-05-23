// synchronous action creators

export const setCurrentUser = user => {
    debugger
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}

// asynchronous action creators

export const login = credentials => {
    return dispatch => {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then(user => {
            dispatch(setCurrentUser(user.data))
        })
    }
}
