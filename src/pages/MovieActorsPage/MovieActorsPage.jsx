import { useState, useEffect } from "react";
//import { UseFetchActors } from "../hooks/UseFetchByActors"
import { Outlet } from "react-router-dom"
import { useParams } from "react-router-dom";
import{fetchMoviesByActors} from "../../services/fetchApi"
import styles from 'pages/MovieActorsPage/MovieActorsPage.module.css'
 import noPhoto from 'images/noPhoto.jpg'

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
                <ul className={styles.list}>
                 {cast.map(({id,profile_path,original_name,name,character}) =>{
                  return (
                     <li key={id} className={styles.items}>
                          {/* <div className={styles.conteiner}> */}
                              {profile_path === null ? <img className={styles.img} src={noPhoto} alt={original_name} />
                                :<img className={styles.img} src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={original_name} />  
                              
                            }
                          
                              <h1 className={styles.title}>{name}</h1> 
                              <p className={styles.text}>{character}</p> 
                         {/* </div> */}
                               
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