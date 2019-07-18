export default (state = {}, action) => {
    switch (action.type) {
        case 'SEARCH_REL_SKILLS_SUCCESS':
            return { 
                ...state, [action.payload.uuid]: action.payload.data
            }
        case 'SEARCH_REL_SKILLS_ERROR':
            return { 
                ...state, [action.payload.uuid]: {
                    errorMessage: action.payload.data
                }
            }
        default:
            return state;
    }
}