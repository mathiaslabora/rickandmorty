

const initialState = {
    pj: {},
    cap: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case PERSONAJES:
            return {
                ...state,
                pj: action.payload
            };
        case CAPITULOS:
            return {
                ...state, cap: action.payload
            };
        default:
            return {...state};
        }

    }



