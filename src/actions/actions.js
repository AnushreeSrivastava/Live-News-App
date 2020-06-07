import { getNewsData } from './news_api';
import * as actionTypes from "./actionTypes";

const dispatch_getBusinessNews = (data) => {
    return ({
        type: actionTypes.GET_BUSINESS_DATA,
        data: data
    })
}

export const getBusinessNews = () => async (dispatch) => {
    let data = await getNewsData('business');
    dispatch(dispatch_getBusinessNews(data));
}

