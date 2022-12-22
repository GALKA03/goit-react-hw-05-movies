import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation, useRef} from 'react-router-dom';
import { fetchByTrending } from '../services/fetchApi'
import { Loader } from 'components/Loading/Loader';
export const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const location = useLocation()
    const firstRender= useRef(null) 
    //посмотреть репету про useRefрефс для исключения двойных запросов
    useEffect(() => {
        const fetchTrending = async () => {
        try {
            setLoading(true);
            const response = await fetchByTrending()
            setMovies(response)
         console.log('resp',response)
        }
      catch(error){
        setError('Ooops. Something went wrong...')
            } 
        finally {
        setLoading(false);
      }  }
      fetchTrending()
    }, [])
        
        
    return (
    
        movies && ( 
            <>
                <ul>
                  {loading && <Loader />}       
                {movies.map(({ id, title, poster_path, release_date, vote_average,original_title }) => {
                    // const toStrig= id.toSrting()
                    return (
                    < li key={id}>
                            <p>{vote_average}</p>
                            <Link to={`/movie/${id}`} state ={{from:location}}><img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} /> </Link>
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