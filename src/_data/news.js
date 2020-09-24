require('dotenv').config()
const axios = require('axios');

module.exports = async function () {
  try {
    const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=co&apiKey=${process.env.NEWS_API_KEY}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}