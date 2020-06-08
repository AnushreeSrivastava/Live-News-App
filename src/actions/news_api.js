import axios from 'axios';
import * as api_config from '../api_config.json';

export const getNewsData = async (category, code) => {
    let url = `${api_config.base_url}?country=${code}&category=${category}&apiKey=${api_config.api_key}`;
    let response = await axios(url);
    console.log("news api:", response);

    return response.data.articles;
}