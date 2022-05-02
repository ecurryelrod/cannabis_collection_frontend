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
            // return {addedStrains: filteredStrains}
            return {...state, filteredStrains}
        
        case 'UPDATE_STRAIN': 
            let updatedStrain = state.addedStrains.map(strain => strain.attributes.id === action.strain.attributes.id ? action.strain : strain)
            return {addedStrains: updatedStrain}
         
        case 'DELETE_STRAIN': 
            let availableStrains = state.addedStrains.filter(strain => strain.attributes.id !== action.strainId)
            return {addedStrains: availableStrains}

        default: return state
    }
}