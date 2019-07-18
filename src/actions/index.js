import openSkills from '../apis/openSkills';

export const setCursorPosition = (x, y) => {
    return {
        type: 'SET_CURSOR_POSITION',
        payload: { x, y }
    };
};

export const setSearchTerm = term => {
    return {
        type: 'SET_SEARCH_TERM',
        payload: term
    };
};

export const searchJobs = job => async dispatch => {
    try {
        dispatch({ type: 'LOADING_FLAG', payload: 'loading' });

        const response = await openSkills.get(`/jobs/autocomplete?begins_with="${job}"`);
        dispatch({ type: 'SEARCH_JOBS_SUCCESS', payload: response.data });

        dispatch({ type: 'LOADING_FLAG', payload: 'loaded' });
    } catch(err) {
        dispatch({ type: 'SEARCH_JOBS_ERROR', payload: err.message });

        dispatch({ type: 'LOADING_FLAG', payload: 'loaded' });
    }
};

export const searchRelatedSkills = jobId => async dispatch => {
    try {
        const response = await openSkills.get(`/jobs/${jobId}/related_skills`);

        dispatch({ type: 'SEARCH_REL_SKILLS_SUCCESS', payload: {
            data: response.data,
            uuid: jobId
        }});
    } catch(err) {
        dispatch({ type: 'SEARCH_REL_SKILLS_ERROR', payload: {
            data: err.message,
            uuid: jobId
        }});
    }
};