
import { fetchMovieshById} from "../services/fetchApi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export const UseFectcMovie = () => {
    const [movies, setMovies] = useState(null);

  const params = useParams()
console.log('params', params)
const{moviesId}=useParams()
console.log('{moviesId}', {moviesId})
    useEffect(() => {
        fetchMovieshById(moviesId).then(setMovies)
    }, [moviesId])
    return movies;
   
}
