// synchronous action creators

export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: 'CLEAR_CURRENT_USER'
    }
}

// asynchronous action creators

export const login = credentials => {
    return dispatch => {
        fetch('http://localhost:3000/login', {
            credentials: 'include',
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

export const getCurrentUser = () => {
    return dispatch => {
        fetch('http://localhost:3000/get_current_user', {
            credentials: 'include',
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(user => {
            dispatch(setCurrentUser(user))
        })
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        fetch('http://localhost:3000/logout', {
            credentials: 'include',
            method: 'DELETE'
        })
    }
}
