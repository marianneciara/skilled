import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'SEARCH_JOBS_SUCCESS':
            return { ..._.mapKeys(action.payload, 'uuid') };
        case 'SEARCH_JOBS_ERROR':
            return { errorMessage: action.payload };
        default:
            return state;
    }
}