export default (state = 'idle', action) => {
    switch (action.type) {
        case 'LOADING_FLAG':
            return action.payload;
        default:
            return state;
    }
};