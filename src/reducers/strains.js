export const strains = (state = [], action) => {
    switch (action.type) {
        case 'SET_STRAINS': 
            return action.strains
        default: return state
    }
}