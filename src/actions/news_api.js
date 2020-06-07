import axios from 'axios';
import * as api_config from '../api_config.json';

export const getNewsData = async category => {
    let url = `${api_config.base_url}?country=us&category=${category}&apiKey=${api_config.api_key}`;
    let response = await axios(url);
    return response.data.articles;
}