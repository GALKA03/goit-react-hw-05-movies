import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBySearch } from 'services/fetchApi';
import { Link, Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { Loader } from '../../components/Loading/Loader';
import styles from '../MovieSearch/MovieSearch.module.css';
import { ButtonMore } from 'components/ButtonMore/ButtonMore';
import depositphotos from '../MovieSearch/depositphotos.jpg';
import noIMG from 'images/noIMG.jpg';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { ScrollUpBtn } from 'components/ScrollUp/ScrollUpBtn';
// import * as Scroll from 'react-scroll';



const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [serchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [fetching, setFetching]= useState(true)
  // const [totalPages,settotalPages]=useState(20);

  const location = useLocation();
  const query = serchParams.get('moviename');


  useEffect(() => {

    if (!query) {
      Notify.info('No movies found. Try again!');
      return;
    }
    const fetchMoviesSearch = async () => {
      try {
        setLoading(true);
        const response = await fetchBySearch(query, page);
        const { results, total_pages, total_results } = response;
        // setMovies(results)
        setMovies([...movies, ...results]);
        setTotalResults(total_results);
         setPage(prevState => prevState + 1)
        const totalPages = Math.ceil(total_pages / 20);
        // if (results.length === 0) {
        //   Notify.info('No images found. Please submit another query!');
        //   return;
        // }
        if (page === totalPages) {
          Notify.info("You've reached the end of search results.");
        }
        if (page > 1) {
          Notify.success(`Hooray! We found ${total_results} images.`);
        }
      } catch (error) {
        setError('Ooops. Something went wrong...');
      } finally {
        setLoading(false);
        setFetching(false)
      }
    };
   
      fetchMoviesSearch();
    
    
  }, [query, page,movies ]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)

    return function () {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])
  
  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
    && movies.length < totalResults) {
      setLoading(true)  
      console.log('scroll')
    }
    
      console.log('scrollHeight', e.target.documentElement.scrollHeight)
    console.log('scrollTop',e.target.documentElement.scrollTop);
     console.log('inner', window.innerHeight)
  }
  
  const hendleFormSubmit = e => {
    e.preventDefault();

    const form = e.target;
    setSearchParams({ moviename: form.elements.query.value.trim() });

    form.reset();
  };
  // const onLoadMore = () => {
  //   setPage(prevNumber => prevNumber + 1);
  // };

  const loadMovies = movies.length !== 0;
  
  const isLastPage = movies.length === totalResults;
  
   const loadMoreBtn = loadMovies && !loading && !isLastPage;
  
  return (
    <>
      <form className={styles.form} onSubmit={hendleFormSubmit}>
        <input
          className={styles.input}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Look for your movie here"
        />
        <button className={styles.button} type="submit"></button>
      </form>
      {error && alert(error.message)}
      {loading && <Loader />}

      {loadMovies ? (
        <>
          {' '}
          <ul className={styles.list}>
            {movies.map(
              ({
                id,
                title,
                poster_path,
                release_date,
                vote_average,
                original_title,
              }) => {
                return (
                  <li key={id} className={styles.item}>
                    <p className={styles.voitAverege}>{Math.ceil(vote_average)}</p>
                     <div className={styles.info}>
                    <Link className={styles.linc} to={`/movie/${id}`} state={{ from: location }}>
                      {poster_path !== null ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                          alt={original_title}
                        />
                      ) : (
                          <img src={noIMG} alt={original_title} style={{width: '100%'  , height:'auto' }}/>
                      )}
                    </Link>
                   <div className={styles.titleConteiner}>
                    <h1 className={styles.titleText}>{title}</h1>
                    <p className={styles.titleText}>{release_date}</p>
                      </div>
                    </div>
                  </li>
                );
              }
            )}
          </ul>
          <ScrollUpBtn />
          <Outlet />
        </>
      ) : (
        <img
          style={{
            display: 'block',
            margin: '10px auto',
            width: 'auto',
            height: 'auto',
          }}
          src={depositphotos}
          alt="Let`s watch movies"
        />
      )}
      {/* {loadMoreBtn && <ButtonMore onLoadMore={onLoadMore} />}  */}
    </>
  );
};
export default MovieSearch;
