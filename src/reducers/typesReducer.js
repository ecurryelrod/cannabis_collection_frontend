export const typesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TYPES': return [action.types]
        default: return state
    }
}