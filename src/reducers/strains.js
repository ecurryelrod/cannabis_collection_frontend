export const strains = (state = {addedStrains: [], filteredStrains: []}, action) => {
    switch (action.type) {
        case 'SET_STRAINS': 
            return {
                addedStrains: action.strains, 
                filteredStrains: action.strains
            }

        case 'ADD_STRAIN': 
            return {
                addedStrains: [...state.addedStrains, action.strain],
                filteredStrains: [...state.filteredStrains, action.strain]
            }

        case 'FILTER_STRAINS':
            let filteredStrains
            if (action.strainType !== "All") {
                filteredStrains = state.addedStrains.filter(strain => strain.attributes.type.name === action.strainType)
            } else {
                filteredStrains = state.addedStrains
            }
            return {...state, filteredStrains}
        
        case 'UPDATE_STRAIN': 
            let updatedStrains = state.addedStrains.map(strain => strain.attributes.id === action.strain.attributes.id ? action.strain : strain)
            return {
                addedStrains: updatedStrains,
                filteredStrains: updatedStrains
            }
         
        case 'DELETE_STRAIN': 
            let remainingStrains = state.addedStrains.filter(strain => strain.attributes.id !== action.strainId)
            return {
                addedStrains: remainingStrains,
                filteredStrains: remainingStrains
            }

        default: return state
    }
}