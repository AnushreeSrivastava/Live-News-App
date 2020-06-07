import * as actionTypes from '../actions/actionTypes';

const initialState = {
    articles: []
}

export const news = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_BUSINESS_DATA:
            return {
                ...state,
                articles: [...action.data]
            };
        default:
            return state;
    }
}