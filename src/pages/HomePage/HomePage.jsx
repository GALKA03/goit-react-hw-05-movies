import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation} from 'react-router-dom';
import { fetchByTrending } from '../../services/fetchApi'
import { Loader } from 'components/Loading/Loader';
import { ButtonMore } from 'components/ButtonMore/ButtonMore';
import style from '../HomePage/HomePage.module.css'


const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage]=useState(1)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const location = useLocation();
    // console.log('locationHome',location)
    // const firstRender= useRef(null) 
    //посмотреть репету про useRefрефс для исключения двойных запросов
    useEffect(() => {
        const fetchTrending = async () => {
        try {
            setLoading(true);
            const response = await fetchByTrending(page)
            const pageNumber = response.page

            console.log('pageNumber',pageNumber)
            setMovies(response.results)
            setTotal(response.total_results)
            // setPage(pageNumber)
         console.log('resp',response)
        }
      catch(error){
        setError('Ooops. Something went wrong...')
            } 
        finally {
        setLoading(false);
      }  }
      fetchTrending()
    }, [page])

    const onLoadMore = () => {
       setPage(prevPage => prevPage  + 1)
    }    
    
    const loadMovies = movies.length !== 0;
//  console.log('loadImages',loadMovies)
  const isLastPage = movies.length === total;
//   console.log('isLastPage',isLastPage)
  const loadMoreBtn =loadMovies &&  !loading && !isLastPage;
//   console.log('loadMoreBtn',loadMoreBtn)
    return (
   
       loadMovies && (
        
            <div className={style.conteiner}>
                <ul className={style.list}>
                  {loading && <Loader />}       
                {movies.map(({ id, title, poster_path, release_date, vote_average,original_title }) => {
                    // const toStrig= id.toSrting()
                    return (
                    < li key={id} className={style.item} >
                            <p>{vote_average}</p>
                            <Link to={`/movie/${id}`} state ={{from: location}}><img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} /> </Link>
                        <div className={style.info}>    
                             <h1>{title}</h1>
                        <p>{release_date}</p>
                            </div>
                    </li>    
                    )    
                })}     
                </ul >
              
              {loadMoreBtn && <ButtonMore onLoadMore={onLoadMore}/> } 
         <Outlet/>    
            </div>
        
            )
          
    )

}
export default HomePage;