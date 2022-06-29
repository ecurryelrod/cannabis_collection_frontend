import { setStrains } from "./strains"
import { clearStrainsOnLogout } from "./strains"

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

export const login = (credentials, history) => {
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
            dispatch(setStrains(user.data.attributes.strains))
            history.push('/strains')
        })
    }
}

export const signup = (newUserInput, history) => {
    const userInput = {
        user: newUserInput
    }

    return dispatch => {
        fetch('http://localhost:3000/signup', {
            credentials: 'include',
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userInput)
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user.data))
                history.push('/strains/new')
            }
        })
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        fetch('https://cannabis-collection.herokuapp.com/get_current_user', {
            credentials: 'include',
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(user => {
            debugger
            dispatch(setCurrentUser(user.data))
            dispatch(setStrains(user.data.attributes.strains))
        })
    }
}

export const logout = (history) => {
    return dispatch => {
        dispatch(clearCurrentUser())
        fetch('http://localhost:3000/logout', {
            credentials: 'include',
            method: 'DELETE'
        })
        .then(() => {
            dispatch(clearStrainsOnLogout())
            alert('Successfully logged out')
            history.push('/')
        })
    }
}
