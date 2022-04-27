export const strains = (state = [], action) => {
    // debugger
    switch (action.type) {
        case 'SET_STRAINS': return action.strains

        case 'ADD_STRAIN': return [...state, action.strain]
        
        // delete does not re-render page without deleted strain
        // must refresh page to see update
        case 'DELETE_STRAIN': 
            // debugger
            return state.filter(strain => strain.attributes.id !== action.strainId)

        default: return state
    }
}