import { useState,useEffect } from 'react';
import { fetchBySerch } from '../services/fetchApi';
import { Link,Outlet,useSearchParams } from 'react-router-dom';

//import { useSearchParams } from 'react-router-dom';
export const  MovieSearch = () => {
    const [movies, setMovies] = useState([]);
    const[serchParams, setSearchParams]=useSearchParams()
    const[page,setPage]=useState(1)
const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
 const query = serchParams.get('moviename')
     console.log('query',query)
    
    useEffect(() => {
        //  if (query===null || query=== '') {
        //   return  alert('Try again') }
        async function fetchMovies() {      
    const response = await fetchBySerch(query);
            setMovies(response)
            console.log('response', response)
    }
fetchMovies()
    }, [query, page])
    

// const hendelChengeInput = e => {
//     setMovies(e.target.toLowerCase());
//     console.log('e.target.value',e.target.value)
//   };
            
const hendleFormSubmit = e => {
    e.preventDefault();
    // if (query===null || query=== '') {
    //       return  alert('Try again')}  
    const form = e.target
    console.log(form)
setSearchParams({ moviename:form.elements.query.value})
    form.reset()
    //setMovies('')
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
            {movies  && (
               <> <ul>
                  {movies.map(({ id, title, poster_path, release_date, vote_average,original_title }) => {
                     console.log('movies.id',id)
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

            }
        </>
    )
}