import { UseFetchMovie } from "../../hooks/UseFetchMovie";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from '../MovieSearch/MovieSearch.module.css'
// import{fetchMoviesById} from "../services/fetchApi"
export const MovieSubPage = () => {
    const movieId = UseFetchMovie();
   
    //const results =movieId{}
    const navigate = useNavigate();
    //console.log(navigate)
    const navLock = useLocation()
    //console.log(movieId)
    // const movieGanres = ({ ganres }) => {
    //     return 
    // }   
    return (

        movieId && (
            <>
                <button /*onClick={()=> {navigate('/')}*/>Go back</button>
        <div>
           <img src={`https://image.tmdb.org/t/p/w500${movieId.backdrop_path}`} alt="" />     
               <div>
                <ul>
                    <li key={movieId.id}>
                         <p>{movieId.original_title}</p>
                        <p>{movieId.overview}</p>
                        <p>{movieId.title}</p>
                    </li>
                    </ul>
                    <ul>   
                            <li> <Link to={`cast`}>Actors</Link></li>
                            <li><Link to={`reviews`}>Reviews</Link></li>
                    </ul>    
                </div>
              
        </div> 
                <Outlet />
        </>        
      )  
    )
}