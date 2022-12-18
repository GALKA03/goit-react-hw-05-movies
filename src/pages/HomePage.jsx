import { useState, useEffect } from 'react'
import { Link, Outlet} from 'react-router-dom';
import { fetchByTrending } from '../services/fetchApi'

export const HomePage = () => {
    const [movies, setMovies] = useState([]);
    //посмотреть репету про useRefрефс для исключения двойных запросов
    useEffect(() => {
        fetchByTrending()
            .then(setMovies)
    }, [])
    return (
        movies && ( 
            <>
        <ul>
                {movies.map(({ id, title, poster_path, release_date, vote_average,original_title }) => {
                    // console.log('movies.id',id)
                    return (
                    < li key={id}>
                            <p>{vote_average}</p>
                            <Link to={id.toString()}><img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} /> </Link>
                        <div>    
                             <h1>{title}</h1>
                        <p>{release_date}</p>
                            </div>
                    </li>    
                    )    
                })}     
            </ul >
           <Outlet/>  
            </>
        )
    )

}