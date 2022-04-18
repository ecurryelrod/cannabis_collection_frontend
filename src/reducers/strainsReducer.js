// const initialState = {
//     strains: [],
//     types: [],
//     effects: []
// }

export const strainsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_STRAINS': 
            return [...state, action.strain]
        default: return state
    }
}