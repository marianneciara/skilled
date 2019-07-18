export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_CURSOR_POSITION':
            return action.payload;
        default:
            return state;
    }
}