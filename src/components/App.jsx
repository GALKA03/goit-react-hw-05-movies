import { Routes, Route } from "react-router-dom";
import {Layout } from "./Layout/Layout";
 import{HomePage}from "../pages/HomePage"
import { MovieSearch } from "../pages/MovieSearch";
import {MovieSubPage} from "../pages/MovieSubPage"
import { MovieActorsPage } from "../pages/MovieActorsPage";
import {MovieReviewsPage} from "../pages/MovieReviewsPage"
export const App = () => {
  return (
//./Layout/Layout
 //../pages/HomePage
 // ../pages/MovieSearch
  //../pages/MovieSubPage
    //../pages/MovieActorsPage
    //../pages/MovieReviewsPage"
  //../pages/MovieSubPage
//./Layout/Layout
    <Routes>
  <Route path="/" element={<Layout />}>   
        <Route index element={<HomePage />} />
        {/* <Route path=":moviesId" element={<MovieSubPage />} > */}
          <Route path="/movie" element={<MovieSearch />} /> 
       <Route path="movie/:moviesId" element={<MovieSubPage />} >
          <Route path="cast" element={<MovieActorsPage/> } />
          <Route path="reviews" element={<MovieReviewsPage/>  } />
       </Route>   
  </Route>  
          <Route path="*" element={<HomePage />} /> 
</Routes>

  )
}

//  <Routes>
//         <Route path="/" element={<NanBar />}>
//           <Route index element={<Home />} />
//           <Route path="/movies" element={<Movies />} />
//           <Route path="/movies/:movieId" element={<MovieDetails />}>
//             <Route path="reiwers" element={<Reviews />} />
//             <Route path="cast" element={<Cast />} />
//           </Route>
//         </Route>
//         <Route path="*" element={<Home />} />
// </Routes> 



// потому что они неправильно сделаны. <Route path="страница с описанием фильма" element={<Компонент />}>
//             <Route path="первая сабстраница" element={<Компонент />} />
//             <Route path="вторая сабстраница" element={<Компонент />} />
//           </Route>