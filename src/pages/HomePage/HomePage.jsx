// import {toast} from 'react-toastify';
import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation} from 'react-router-dom';
import { fetchByTrending } from '../../services/fetchApi';
import ReactPaginate from "react-paginate";
import { Loader } from 'components/Loading/Loader';
//import { ButtonMore } from 'components/ButtonMore/ButtonMore';
import noIMG from 'images/noIMG.jpg'
import style from '../HomePage/HomePage.module.css';
 import { ScrollUpBtn } from 'components/ScrollUp/ScrollUpBtn';
import Pagination from 'components/Pagination/Pagination';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage]=useState(1)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  //const [total, setTotal] = useState(20);
  const [totalResults, setTotalResults] = useState(0);
 const [totalPages]=useState(20);
  
    const location = useLocation();
    
    //посмотреть репету про useRefрефс для исключения двойных запросов 
  useEffect(() => {
        const fetchTrending = async () => {
        try {
            setLoading(true);
            const response = await fetchByTrending(page)
            //const pageNumber = response.page
const { results, total_pages }=response;
            // console.log('response',response)
            setMovies(results)
           setTotalResults(response.total_results)
            // setPage(pageNumber)
         //console.log('resp',response)
           const totalPages = Math.ceil(total_pages /20);
           if (response.results.length === 0) {
            alert('No images found. Please submit another query!');
          return
          }
           if (page === totalPages) {
         alert("You've reached the end of search results.");
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


// const paginate= pageNumber=>setPage(pageNumber)
   
  // const endOffset = page * totalPages;
 
  // const firstMovieIndex = endOffset - totalPages;
  
  // const currentMovies = movies.slice(firstMovieIndex, endOffset);
 
  // const paginate =(pageNumber)=>setPage(pageNumber)
  // пагинация 2
   const endOffset = page * totalPages;
 
  const displayMovies = movies
    .slice(
      endOffset,
      endOffset + totalPages
    )
  const totalPagesMov = Math.ceil(movies.length / totalPages);
  const changePage = ({ selected }) => {
  setPage(selected);
};
  // const onLoadMore = () => {
  //      setPage(prevPage => prevPage  + 1)
  //   }    
    
 const loadMovies = movies.length !== 0;
// const isLastPage = movies.length === totalResults;
// const loadMoreBtn =loadMovies &&  !loading && !isLastPage;  
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
                        <div className={style.info}> 
                          <Link to={`/movie/${id}`} state={{ from: location }}>
                {poster_path !== null ? <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} />
                : <img src={noIMG} alt={original_title} />
              }
                           </Link>
                           
                             <h1>{title}</h1>
                        <p>{release_date}</p>
                            </div>
                    </li>    
                    )    
                })}     
          <ScrollUpBtn /> 
        </ul >

        <ReactPaginate
          pageCount={totalPagesMov}
          totalMovies={movies.length}
          onPageChange={changePage}
          containerClassName={style.navigationButtons}
          previousLinkClassName={style.previousButton}
          nextLinkClassName={style.nextButton}
          disabledClassName={style.navigationDisabled}
          activeClassName={style.navigationActive}
        />
        
             {/* <Pagination totalPages={totalPages} totalMovies={movies.length} paginate={paginate} /> */}
          {/* {loadMoreBtn && <ButtonMore onLoadMore={onLoadMore} />}   */}
        <Outlet /> 
   
      {displayMovies}
            </div>
        
            )
          
  )
 
 

}
export default HomePage;