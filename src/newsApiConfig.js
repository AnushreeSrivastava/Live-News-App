export const getNewsData = async (category, code) => {
    let url = `${api_config.base_url}${category}?country=${code}&token=${api_config.API_token}`;
    let response = await axios.get(url);
    return response.data.articles;
}


{
    "base_url": "https://gnews.io/api/v3/topics/",
        "API_token": "da60afc9dcaddfb7388eaf06732ae787"
}
