import { Routes, Route } from "react-router-dom";
import {Layout } from "./Layout/Layout";
 import{HomePage}from "../pages/HomePage"
import { MovieSearch } from "../pages/MovieSearch";
import {MovieSubPage} from "../pages/MovieSubPage"
import { MoviePage } from "../pages/MoviePage"
import { MovieActorsPage } from "pages/MovieActorsPage";
import {MovieReviewsPage} from "../pages/MovieReviewsPage"
export const App = () => {
  return (
    <Routes>
      <Route index element={<Layout />}>   
      <Route path='/movies' element={<HomePage />} /> 
       <Route path="/movies/:moviesId" element={<MovieSubPage />} >
          <Route path="get-movie-credits" element={<MovieActorsPage/> } />
          <Route path="get-movie-reviews" element={<MovieReviewsPage/>  } />
      </Route>      
      </Route>
        {/* <Route path='movie' element={<MoviePage />} />   */}
     <Route path="search" element={<MovieSearch/>} >
          <Route path=":moviesId" element={<MovieSubPage />} /> 
      </Route>   
      
      {/* <Route path="*" element={<HomePage />} /> */}
</Routes>

  )
}

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />} />
//         <Route path="events" element={<EventsPage />}>
//           <Route path=":eventId" element={<EventSubPage />} />
//         </Route>
//         <Route path="search" element={<SearchEventsPage />}>
//           <Route path=":eventId" element={<EventSubPage />} />
//         </Route>
//         <Route path="events/:eventId/details" element={<EventDetailsPage />} />
//         <Route path='search/:eventId/details' element={<EventDetailsPage />} />
//       </Route>
//     </Routes>
//   );
// };
// потому что они неправильно сделаны. <Route path="страница с описанием фильма" element={<Компонент />}>
//             <Route path="первая сабстраница" element={<Компонент />} />
//             <Route path="вторая сабстраница" element={<Компонент />} />
//           </Route>