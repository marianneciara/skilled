import { combineReducers } from 'redux';
import setCursorPositionReducer from './setCursorPositionReducer';
import loadingFlagReducer from './loadingFlagReducer';
import setSearchTermReducer from './setSearchTermReducer';
import searchJobsReducer from './searchJobsReducer';
import searchSkillsReducer from './searchSkillsReducer';

export default combineReducers({
    cursorPosition: setCursorPositionReducer,
    status: loadingFlagReducer,
    searchTerm: setSearchTermReducer,
    searchResults: searchJobsReducer,
    relatedSkills: searchSkillsReducer
});