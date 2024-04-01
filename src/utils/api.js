import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

/*import axios from 'axios';

const BASE_URL='https://imdb8.p.rapidapi.com';
const API_KEY=import.meta.env.VITE_APP_RAPIDAPI_KEY;
const RapidAPIHost=import.meta.env.VITE_APP_RAPIDAPI_HOST;
const headers={
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': RapidAPIHost
};

export const getMovies =async (url, params)=>{
    try {
        const {data}=await axios.get(BASE_URL+url,{
            headers,
            params
        })
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}


import axios from 'axios';

const BASE_URL="https://api.themoviedb.org/3";
const TMDB_TOKEN=import.meta.env.VITE_APP_TMDB_TOKEN;
const headers={
    Authorization: `bearer ${TMDB_TOKEN}`
};

export const getMovies =async (url, params)=>{
    try {
        const {data}=await axios.get(BASE_URL+url,{
            headers,
            params
        })
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}


const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: {q: 'game'},
  headers: {
    'X-RapidAPI-Key': 'd12dbc0205msh5faf1f1eb56bbe4p14b20ejsneb7dd3461d49',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}*/
