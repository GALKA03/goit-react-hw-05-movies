import axios from "axios";

const KEY = "a1426f875d9b25aa0fd82fb82639d8ae"

axios.defaults.baseURL= 'https://api.themoviedb.org/3/'
//?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
export async function fetchByTrending (page) {
    const response = await axios('trending/movie/week',{
        params:
        {
           api_key: KEY,
            total_pages: 20,
            page,
        }    
    })
    return response.data.results;
}
 
// export const fetchBySerch = async (query, page = 1) => {
//   const response = await axios.get(
//     `/search/movie'?api_key=${KEY}&page=${page}&query=${query}&language=en-US&include_adult=false`
//   );
//   return response.data.results;
// };

// export async function fetchBySearch(query,) {
//     const response = await axios('search/movie', {
//         params:
//         {
//           api_key: KEY,
//             total_pages: 20,
//             page:1,
//             query,
//         }
//     })
//     return response.data.results;
// }
export async function fetchBySearch(query) {
    const response = await axios('search/movie',{
        params:
        {
           api_key: KEY,
            total_pages: 20,
            page:1,
             query:`${query}`
        }    
    })
    return response.data.results;
}




export async function fetchMoviesById(movie_id) {
    const response = await axios(`movie/${movie_id}`, {
        params:
        {
          api_key: KEY,
        }
    })
    return response.data;
}

export async function fetchMoviesByActors(movie_id) {
    const response = await axios(`movie/${movie_id}/credits`, {
        params:
        {
            api_key: KEY,   
           // cast:[]
        }
    })
    return response.data;
}

export async function fetchMoviesReviews(movie_id,page,results) {
    const response = await axios(`movie/${movie_id}/reviews`, {
        params:
        {
            api_key: KEY,   
            results: [],
            page:1,
        }
    })
    return response.data.results;
}
