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
        fetch('https://cannabis-collection.herokuapp.com/api/v1/effects')
        .then(resp => resp.json())
        .then(effects => {dispatch(setEffects(effects.data))})
    }
}