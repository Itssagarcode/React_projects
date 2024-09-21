import axios from 'axios';

// Exercise DB API options
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
};

// YouTube API options
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

// Fetch data function using Fetch API
export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Example of making a request using axios
export const fetchDataWithAxios = async (url, options) => {
  try {
    const response = await axios.request({
      url,   // URL passed dynamically
      ...options, // Use the options (either exerciseOptions or youtubeOptions)
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error with axios request:', error);
  }
};
