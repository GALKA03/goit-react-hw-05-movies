import { useState,useEffect } from 'react';
import { fetchBySearch } from 'services/fetchApi';
import { Link,Outlet,useSearchParams } from 'react-router-dom';
import {Loader} from "../components/Loading/Loader"
export const MovieSearch = () => {
    const [movies, setMovies] = useState([]);
    const[serchParams, setSearchParams]=useSearchParams()
    const[page,setPage]=useState(1)
const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
 const query = serchParams.get('moviename')
    
    useEffect(() => {
          if (query===null || query=== '') {
          return}
       
       const fetchMoviesSearch = async () => {
        try {
            setLoading(true);
            const response = await fetchBySearch(query,page)
            setMovies(response)
           // console.log('movies',movies)
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
// const hendelChengeInput = e => {
//     setMovies(e.target.toLowerCase());
//     console.log('e.target.value',e.target.value)
//   };
            
const hendleFormSubmit = e => {
    e.preventDefault();
    // if (query === null || query === '') {
    //     return
    // } 
    const form = e.target
setSearchParams({ moviename:form.elements.query.value})
    form.reset()
     }
    return (
        <>
            
        <form  onSubmit={hendleFormSubmit}>
                <input
                    //onChange={hendelChengeInput}
                    //value={query}
                    name='query'
                    type="text" 
      autoComplete="off"
      autoFocus
      placeholder="Look for your movie here"/>
             <button type="submit">Submit</button>
            </form>
 {loading && <Loader />} 
            {movies.length >0 && (
               <> <ul>
                  {movies.map(({ id, title, poster_path, release_date, vote_average,original_title }) => {
                    return (
                    < li key={id}>
                            <p>{vote_average}</p>
                             <Link to={`/movie/${id}`}><img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} /> </Link> 
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

            }
        </>
    )
}