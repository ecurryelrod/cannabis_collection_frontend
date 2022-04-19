// const initialState = {
//     strains: [],
//     types: [],
//     effects: []
// }

export const strains = (state = [], action) => {
    switch (action.type) {
        case 'GET_STRAINS': 
            return [...state, action.strain]
        default: return state
    }
}