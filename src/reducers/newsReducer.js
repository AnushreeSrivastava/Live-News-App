import * as actionTypes from '../actions/actionTypes';

const initialState = {
    code: 'us',
    articles: []
}

export const news = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA:
            return {
                ...state,
                articles: [...action.data]
            };
        case actionTypes.CHANGE_COUNTRY:
            return {
                ...state,
                code: action.code
            }
        default:
            return state;
    }
}