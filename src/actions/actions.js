import { getNewsData } from './news_api';
import * as actionTypes from "./actionTypes";

const dispatch_getNews = (data) => {
    return ({
        type: actionTypes.GET_DATA,
        data: data
    })
}

export const getNews = (category, code) => async (dispatch) => {
    let data = await getNewsData(category, code);
    // console.log(data);

    dispatch(dispatch_getNews(data));
}

