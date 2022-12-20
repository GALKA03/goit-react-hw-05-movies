import { UseFetchMovie } from "../hooks/UseFetchMovie";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState,useEffect} from "react";
import{fetchMoviesById} from "../services/fetchApi"
export const MoviePage = () => {
    const movieId = UseFetchMovie()
    //console.log(movieId)
    // const movieGanres = ({ ganres }) => {
    //     return 
    // }   
    return (
       movieId && (
        <div>
           <img src={`https://image.tmdb.org/t/p/w500${movieId.backdrop_path}`} alt="" />     
               <div>
                <ul>
                    <li key={movieId.id}>
                         <p>{movieId.original_title}</p>
                        <p>{movieId.overview}</p>
                         {/* <video src={movieId.video}></video>  
                           */}
                        {/* <p>{movieId.genres}</p> */}
                        <p>{movieId.title}</p>
                    </li>
                    </ul>
                    <ul>
                        <li><Link to='movies'>movies</Link></li>
                    </ul>    
                </div>
               <Outlet />
        </div>    
      )  
    )
}