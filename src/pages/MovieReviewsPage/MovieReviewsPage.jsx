import { fetchMoviesReviews } from "../../services/fetchApi";
import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
export const MovieReviewsPage = () => { 
    const { moviesId } = useParams()
 
    const [results, setResults] = useState([]);
    //const[detailse, setDetailse] =useState([])
    const[page, setPage] =useState(1)
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
                <ul>
                {results.map(({id,author,content}) => {
                    return (
                        <li key={id}>
                            <div>
                                <h1>{author}</h1>
                                <p>{content}</p>
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