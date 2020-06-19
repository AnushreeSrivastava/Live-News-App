import { getNewsData } from './news_api';
import * as actionTypes from "./actionTypes";
import Unsplash, { toJson } from 'unsplash-js';


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


const dispatch_images = pics => {
    return ({
        type: actionTypes.GET_IMAGE_DATA,
        data: pics
    })
}

export const getImages = (category) => (dispatch) => {
    const unsplash = new Unsplash({ accessKey: "xkbs9DU-61Menx3GsjznI9lpgD9_f7-pRM6sAsqPci0" });
    unsplash.search.photos(category, 1, 10, { orientation: "landscape" })
        .then(toJson)
        .then(json => {
            let pics = json.results;
            dispatch(dispatch_images(pics));
        })
        .catch(err => console.log(err));
}
