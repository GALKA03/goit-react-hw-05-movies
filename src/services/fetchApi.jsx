import axios from "axios";

const KEY = "a1426f875d9b25aa0fd82fb82639d8ae"

axios.defaults.baseURL= 'https://api.themoviedb.org/3/'
//?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
export async function fetchByTrending (page,perPage) {
    const response = await axios('trending/movie/week',{
        params:
        {
           api_key: KEY,
            perPage: 20,
            page,
        }    
    })
    return response.data.results;
}
 
export async function fetchBySerch(query, page) {
    const response = await axios('search/movie', {
        params:
        {
          api_key: KEY,
            perPage: 20,
            page:1,
            query:`${query}`,
        }
    })
    return response.data.results;
}

export async function fetchMovieshById(movie_id) {
    const response = await axios(`movie/${movie_id}`, {
        params:
        {
          api_key: KEY,
        }
    })
    return response.data;
}
//const fetchtrendingFilms= 'https://api.themoviedb.org/3/trending/all/week?api_key=<<api_key>'>

//const fetchBySerchFilms= https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

//const fetchByID=https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
//const fechAboutActor= 'https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US'
//const fetchByrevuse= 'https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1'

//const API_KEY='?api_key=a1426f875d9b25aa0fd82fb82639d8ae'