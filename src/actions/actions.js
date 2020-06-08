import { getNewsData } from './news_api';
import * as actionTypes from "./actionTypes";

const dispatch_getNews = (data) => {
    return ({
        type: actionTypes.GET_DATA,
        data: data
    })
}

//action to get news articles by category(business,tech,sports..) and country code(us,in,ca..)
export const getNews = (category, code) => async (dispatch) => {
    let data = await getNewsData(category, code);
    dispatch(dispatch_getNews(data));
}

//change country code on dropdown selection
export const changeCountry = (code) => {
    return ({
        type: actionTypes.CHANGE_COUNTRY,
        code: code
    })
}
