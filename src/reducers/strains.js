export const strains = (state = {addedStrains: [], filteredStrains: []}, action) => {
    switch (action.type) {
        case 'SET_STRAINS': 
            return {
                addedStrains: action.strains, 
                filteredStrains: action.strains
            }

        case 'ADD_STRAIN': 
            return {
                addedStrains: [...state.addedStrains, action.strain.attributes],
                filteredStrains: [...state.filteredStrains, action.strain.attributes]
            }

        case 'FILTER_STRAINS':
            let filteredStrains
            if (action.strainType) {
                filteredStrains = state.addedStrains.filter(strain => strain.type.name === action.strainType)
            } else {
                filteredStrains = state.addedStrains
            }
            return {...state, filteredStrains}
        
        case 'UPDATE_STRAIN': 
            let updatedStrains = state.addedStrains.map(strain => strain.id === action.strain.attributes.id ? action.strain.attributes : strain)
            return {
                addedStrains: updatedStrains,
                filteredStrains: updatedStrains
            }
         
        case 'DELETE_STRAIN': 
            let remainingStrains = state.addedStrains.filter(strain => strain.id !== action.strainId)
            return {
                addedStrains: remainingStrains,
                filteredStrains: remainingStrains
            }

        case 'CLEAR_STRAINS_ON_LOGOUT':
            return {
                addedStrains: [], 
                filteredStrains: []
            }

        default: return state
    }
}