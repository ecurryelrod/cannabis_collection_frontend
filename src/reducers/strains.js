export const strains = (state = {addedStrains: []}, action) => {
    switch (action.type) {
        case 'SET_STRAINS': 
        // debugger
            return {addedStrains: action.strains}

        case 'ADD_STRAIN': 
            return [...state, action.strain]

        case 'FILTER_STRAINS':
            let filteredStrains = state.addedStrains.filter(strain => strain.attributes.type.name === action.strainType)
            // debugger
            return {...state, filteredStrains}
        
        case 'UPDATE_STRAIN': 
            return state.map(strain => strain.attributes.id === action.strain.attributes.id ? action.strain : strain)
         
        case 'DELETE_STRAIN': 
            return state.filter(strain => strain.attributes.id !== action.strainId)

        default: return state
    }
}