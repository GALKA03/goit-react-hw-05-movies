
import { fetchMoviesById} from "../services/fetchApi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export const UseFetchMovie = () => {
    const [movies, setMovies] = useState(null);


const{moviesId}=useParams()
    useEffect(() => {
        fetchMoviesById(moviesId).then(setMovies)
    }, [moviesId])
    return movies;
   
}
