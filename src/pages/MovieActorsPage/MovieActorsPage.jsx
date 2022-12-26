import { useState, useEffect } from "react";
//import { UseFetchActors } from "../hooks/UseFetchByActors"
import { Outlet } from "react-router-dom"
import { useParams } from "react-router-dom";
import{fetchMoviesByActors} from "../../services/fetchApi"

 const MovieActorsPage = () => {
const{moviesId}=useParams()

    const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
// const location = useLocation();
    useEffect(() => {
        const fetchCast = async () => {
            try {
            //  setLoading(true);
                const response = await fetchMoviesByActors(moviesId)
                const arr = response.cast
                setCast(arr)
                // const arr = cast.filter(elem => {
                //     return arr
                // })
               // console.log('response',response.cast)
        }
         catch(error){
        setError('Ooops. Something went wrong...')
            } 
    
     }   
        fetchCast()
    },[moviesId])
    
   
    return (
        cast && (
            <>
                 {error && alert(error.message)}
                <ul>
                 {cast.map(({id,profile_path,original_name,name,character}) =>{
                  return (
                     <li key={id}>
                          <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={original_name} /> 
                          <div>
                              <h1>{name}</h1> 
                              <p>{character}</p> 
                         </div>
                               
                </li> 
                  )   
                 })   
}            
            </ul>
             <Outlet /> 
            </>
     )   
      
   ) 
}
export default MovieActorsPage;