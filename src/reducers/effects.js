export const effects = (state = [], action) => {
    switch (action.type) {
        case 'SET_EFFECTS': 
            return action.effects
        default: return state
    }
}