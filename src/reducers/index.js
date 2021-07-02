const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_MENU':
            return {
                ...state,
                menuActive: action.payload,
            };
        case 'SET_WISH':
            return {
                ...state,
                desiredOffer: [...state.desiredOffer, action.payload],
            };
        case 'DELETE_WISH':
            return {
                ...state,
                desiredOffer: state.desiredOffer.filter(
                    (items) => items.data.dealID !== action.payload,
                ),
            };
        default:
            return state;
    }
};

export default reducer;