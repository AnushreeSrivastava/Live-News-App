import axios from 'axios';
import * as api_config from '../api_config.json';

// news api call
// export const getNewsData = async (category, code) => {
//     let url = `${api_config.base_url}?country=${code}&category=${category}&apiKey=${api_config.api_key}`;
//     let response = await axios.get(url);
//     return response.data.articles;
// }

//gnew.io api call
export const getNewsData = async (category, code) => {
    let url = `${api_config.base_url}${category}?country=${code}&token=${api_config.API_token}`;
    let response = await axios.get(url);
    return response.data.articles;
}
