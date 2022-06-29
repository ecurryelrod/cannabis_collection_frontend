export const currentUser = (state = null, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER": 
            if (action.user) {
                return action.user
            } else {
                return null
            }
        case "CLEAR_CURRENT_USER": return null
        default: return state
    }
}