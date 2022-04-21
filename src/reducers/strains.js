export const strains = (state = [], action) => {
    switch (action.type) {
        case 'SET_STRAINS': return action.strains
        case 'ADD_STRAIN': return [...state, action.strain]
        default: return state
    }
}