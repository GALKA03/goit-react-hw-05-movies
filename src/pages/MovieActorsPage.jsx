import { useState, useEffect } from "react";
//import { UseFetchActors } from "../hooks/UseFetchByActors"
import { Outlet } from "react-router-dom"
import { useParams } from "react-router-dom";
import{fetchMoviesByActors} from "../services/fetchApi"

export const MovieActorsPage = () => {
const{moviesId}=useParams()

    const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCast = async () => {
            try {
             setLoading(true);
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
            finally {
        setLoading(false);
      }
     }   
        fetchCast()
    },[moviesId])
    
   
    return (
        cast && (
            <>
                <ul>
                 {cast.map(({id,profile_path,original_name,name,character}) =>{
                  return (
                     <li key={id}>
                          <img src={`https://image.tmdb.org/t/p/w300${profile_path}`} alt={original_name} /> 
                          <div>
                              <h1>{name}</h1> 
                              <p>{character}</p> 
                              {/* <p>{ known_for_department}</p>     */}
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
