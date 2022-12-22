import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation} from 'react-router-dom';
import { fetchByTrending } from '../../services/fetchApi'
import { Loader } from 'components/Loading/Loader';
import style from '../HomePage/HomePage.module.css'


export const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const location = useLocation()
    // const firstRender= useRef(null) 
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
            <div className={style.conteiner}>
                <ul className={style.list}>
                  {loading && <Loader />}       
                {movies.map(({ id, title, poster_path, release_date, vote_average,original_title }) => {
                    // const toStrig= id.toSrting()
                    return (
                    < li key={id} className={style.item} >
                            <p>{vote_average}</p>
                            <Link to={`/movie/${id}`} state ={{from:location}}><img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} /> </Link>
                        <div className={style.info}>    
                             <h1>{title}</h1>
                        <p>{release_date}</p>
                            </div>
                    </li>    
                    )    
                })}     
            </ul >
         <Outlet/>    
            </div>
            )
            
    )

}