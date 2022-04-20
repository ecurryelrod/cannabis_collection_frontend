// synchronous actions
export const setEffects = effects => {
    return {
        type: 'SET_EFFECTS',
        effects
    }
}

// asynchronous actions
export const fetchEffects = () => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/api/v1/effects')
        .then(resp => resp.json())
        .then(effects => dispatch(setEffects(effects.data)))
    }
}