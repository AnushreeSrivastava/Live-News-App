import * as actionTypes from '../actions/actionTypes';

const initialState = {
    pics: []
}

export const pics = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_IMAGE_DATA:
            return {
                ...state,
                pics: [...action.data]
            };
        default:
            return state;
    }
}