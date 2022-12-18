import { Routes, Route } from "react-router-dom";
import {Layout } from "./Layout/Layout";
 import{HomePage}from "../pages/HomePage"
import { MoviePage } from "pages/MoviePage";
import {MovieSubPage} from "../pages/MovieSubPage"

export const App = () => {
  return (
    <Routes>
      <Route path='/'element={<Layout/>}>
        <Route index element={<HomePage />} />
           <Route path="/movies" element={<MoviePage />} >
          <Route path=":moviesId" element={<MovieSubPage/> } />
           </Route>
      </Route>
</Routes>

  )
}
