import { useState, useEffect } from 'react';
import {toast} from 'react-toastify';
import { fetchBySearch } from 'services/fetchApi';
import { Link,Outlet,useSearchParams,useLocation } from 'react-router-dom';
import { Loader } from "../../components/Loading/Loader"
import styles from '../MovieSearch/MovieSearch.module.css'
import { ButtonMore } from 'components/ButtonMore/ButtonMore';
import depositphotos from '../MovieSearch/depositphotos.jpg'
 const MovieSearch = () => {
    const [movies, setMovies] = useState([]);
    const[serchParams, setSearchParams]=useSearchParams()
    const [page, setPage] = useState(1);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);
const [totalResults, setTotalResults] = useState(0);
// const [totalPages,settotalPages]=useState(20);
    
   const location = useLocation()
 const query = serchParams.get('moviename')
    
    useEffect(() => {
        if (!query) {
            //   toast.info('No movies found. Try again!');
              return
          }
       
       const fetchMoviesSearch = async () => {
        try {
            setLoading(true);
           const response = await fetchBySearch(query, page) 
     const  { results, total_pages, total_results }=response;
          setMovies(results)
          setTotalResults(total_results)
    console.log('response',response)
            const totalPages = Math.ceil(total_pages / 20);
          if (results.length === 0) {
            toast.info('No images found. Please submit another query!');
          return
          }
           if (page === totalPages) {
         toast("You've reached the end of search results.");
           }
          if (page >1) {
           toast.success(`Hooray! We found ${total_results} images.`);
          }
         }  
            catch(error) {
                setError('Ooops. Something went wrong...')
       }     
           finally {
        setLoading(false);
      } 
    }
fetchMoviesSearch()
    }, [query,page])
            
const hendleFormSubmit = e => {
    e.preventDefault();
    // if (query === null || query === '') {
    //     return
    // } 
    const form = e.target
setSearchParams({ moviename:form.elements.query.value.trim()})
    form.reset()
    }
    const onLoadMore = () => {
        setPage(prevNumber => prevNumber + 1)
    }  
    
     const loadMovies = movies.length !== 0;
 //console.log('loadImages',loadMovies)
  const isLastPage = movies.length === totalResults;
  //console.log('isLastPage',isLastPage)
  const loadMoreBtn =loadMovies &&  !loading && !isLastPage;
  //console.log('loadMoreBtn',loadMoreBtn)

    return (
        <>     
        <form className={styles.form} onSubmit={hendleFormSubmit}>
                <input
                    className={styles.input}
                    //onChange={hendelChengeInput}
                    //value={query}
                    name='query'
                    type="text" 
      autoComplete="off"
      autoFocus
      placeholder="Look for your movie here"/>
             <button className={styles.button} type="submit"></button>
            </form>
            {error && alert(error.message)}
        {loading && <Loader />} 
    
            {loadMovies ? (
               <> <ul className={styles.list}>
                  {movies.map(({ id, title, poster_path, release_date, vote_average,original_title }) => {
                    return (
                    < li key={id} className={styles.item}>
                            <p className={styles.reiting}>{vote_average}</p>
                             <Link to={`/movie/${id}`} state={{ from: location }}><img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} /> </Link> 
                        <div className={styles.info}>    
                             <h1 className={styles.title}>{title}</h1>
                        <p className={styles.realase}>{release_date}</p>
                            </div>
                    </li>    
                    )    
                  })}
                   
                </ul >
                   {/* {loadMoreBtn &&<ButtonMore onLoadMore={onLoadMore}/>} */}
                    <Outlet/>
</> 
            )
:  <img
             style={{
        display: 'block',
        margin: "10px auto",
        width: 'auto',
       height: "auto",
      }}
            src={depositphotos} alt="Let`s watch movies" />}
             {loadMoreBtn &&<ButtonMore onLoadMore={onLoadMore}/>}
        </>
    )
}
export default MovieSearch;