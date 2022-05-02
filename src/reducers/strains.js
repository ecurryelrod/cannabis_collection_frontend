export const strains = (state = [], action) => {
    switch (action.type) {
        case 'SET_STRAINS': 
            return action.strains

        case 'ADD_STRAIN': 
            return [...state, action.strain]

        case 'FILTER_STRAINS':
            // debugger
            return state.filter(strain => {
                // debugger
                return strain.attributes.type.name === action.strainType
            }) 
        
        case 'UPDATE_STRAIN': 
            return state.map(strain => strain.attributes.id === action.strain.attributes.id ? action.strain : strain)
         
        case 'DELETE_STRAIN': 
            return state.filter(strain => strain.attributes.id !== action.strainId)

        default: return state
    }
}