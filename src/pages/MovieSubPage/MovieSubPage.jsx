import { UseFetchMovie } from "../../hooks/UseFetchMovie";
import { Outlet,NavLink, useNavigate, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
 import styles from 'pages/MovieSubPage/MovieSubPage.module.css'
// import{fetchMoviesById} from "../services/fetchApi"
const MovieSubPage = () => {
    const movieId = UseFetchMovie();
   
let activeStyle = {
     
    textDecoration: "underline",
    color: "rgb(65, 12, 115)",
    fontSize: '30',

  };


    //const results =movieId{}
    const navigate = useNavigate();
    //console.log(navigate)
    const location = useLocation()
    console.log('locationSubPage',location)
    // const movieGanres = ({ ganres }) => {
    //     return 
    // }   
    return (

        movieId && (
            <>
                 <button className={styles.btnBack} onClick={() => { navigate(location?.state?.from ?? '/') }}>Go back</button>       
                <div>
            
           <img className={styles.img} src={`https://image.tmdb.org/t/p/w500${movieId.backdrop_path}`} alt="" />     
               <div className={styles.conteiner}>
                <ul className={styles.list1}>
                    <li className={styles.item} key={movieId.id}/>
                         <li className={styles.item}>{movieId.original_title}</li>
                        <li className={styles.items}>{movieId.overview}</li>
                        {/* <li className={styles.item}>{movieId.title}</li> */}
                    
                    </ul>
                    <ul className={styles.list}>   
                            <li className={styles.itemli}> <NavLink className={styles.link} to={`cast`} state={location.state} style={({ isActive }) =>isActive ? activeStyle : undefined}>Cast</NavLink></li>
                            <li className={styles.itemli}><NavLink className={styles.link} to={`reviews`} state={location.state} style={({ isActive }) =>isActive ? activeStyle : undefined}>Reviews</NavLink></li>
                    </ul>    
                </div>
              
        </div> 
                <Outlet />
        </>        
      )  
    )
}
export default MovieSubPage;