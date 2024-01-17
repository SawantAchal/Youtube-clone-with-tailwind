import axios from 'axios'

const BASE_URL ='https://youtube138.p.rapidapi.com'

const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };


// creating api to fetch data  in that url is part after baseurl it ddepends on our search
// we use await async .
// we use axois to get data from api
// options is function we declare above to fetch data from rapid api

const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
