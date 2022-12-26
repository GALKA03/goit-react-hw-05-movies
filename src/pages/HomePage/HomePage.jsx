import {toast} from 'react-toastify';
import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation} from 'react-router-dom';
import { fetchByTrending } from '../../services/fetchApi'
import { Loader } from 'components/Loading/Loader';
import { ButtonMore } from 'components/ButtonMore/ButtonMore';
// import  Pagination  from 'components/Pagination/Pagination';
import style from '../HomePage/HomePage.module.css'


const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage]=useState(1)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(20);
  // const [currePage, setPerPAge] = useState(20)
    const location = useLocation();
    // console.log('locationHome',location)
    // const firstRender= useRef(null) 
    //посмотреть репету про useRefрефс для исключения двойных запросов
    
  
  useEffect(() => {
        const fetchTrending = async () => {
        try {
            setLoading(true);
            const response = await fetchByTrending(page)
            //const pageNumber = response.page
const { results, total_pages }=response;
            console.log('response',response)
            setMovies(results)
            setTotal(response.total_results)
            // setPage(pageNumber)
         //console.log('resp',response)
           const totalPages = Math.ceil(total_pages /20);
           if (response.results.length === 0) {
            toast.info('No images found. Please submit another query!');
          return
          }
           if (page === totalPages) {
         toast("You've reached the end of search results.");
           }
        }
      catch(error){
        setError('Ooops. Something went wrong...')
            } 
        finally {
        setLoading(false);
      }  }
      fetchTrending()
    }, [page])

//   const lastMovieIndex = page * total;
//   const firstMovieIndex = lastMovieIndex - total;
//  const currentMovie = movies.slise(firstMovieIndex,lastMovieIndex)
//   const paginate= pageNumber=>setPage(pageNumber)
  
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
             {error && alert(error.message)}
                <ul className={style.list}>
            {loading && <Loader />} 
            
                {movies.map(({ id, title, poster_path, release_date, vote_average,original_title }) => {  
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
          <Outlet />  
          {/* <Pagination total={total} totalPages={movies.length} paginate={paginate} />  */}
            </div>
        
            )
          
    )

}
export default HomePage;