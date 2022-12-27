import { fetchMoviesReviews } from "../../services/fetchApi";
import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
 import styles from 'pages/MovieReviewsPage/MovieReviewsPage.module.css'
const MovieReviewsPage = () => { 
    const { moviesId } = useParams()
 
    const [results, setResults] = useState([]);
    //const[detailse, setDetailse] =useState([])
    // const[page, setPage] =useState(1)
  const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
useEffect(() => {
        const fetchResults= async () => {
            try {
            //  setLoading(true);
                const response = await fetchMoviesReviews(moviesId)
                setResults( response)
               
        }
         catch(error){
        setError('Ooops. Something went wrong...')
            } 
    //         finally {
    //     setLoading(false);
    //   }
     }   
        fetchResults()
    },[moviesId])
    


    return (
        results && (
            <>
                 {error && alert(error.message)}
                <ul className={styles.list}>
                {results.map(({id,author,content}) => {
                    return (
                        <li key={id} className={styles.item}>
                            <div className={styles.conteiner}>
                                <h1 className={styles.title}>{author}</h1>
                                <p className={styles.text}>{content}</p>
                                {/* <p>created:{created_at}</p>
                                <a href={url}>{url}</a> */}
                            </div>
                           

                  </li> 
            )})}   
               
            </ul>
<Outlet/>
           </>
        )   
     
  )  
}
export default MovieReviewsPage;