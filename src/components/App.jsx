// import { ToastContainer} from 'react-toastify';
import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import { Loader } from './Loading/Loader';
import React from 'react'


const Layout = lazy(() => import('./Layout/Layout'))
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MovieSearch = lazy(() => import('../pages/MovieSearch/MovieSearch'));
const  MovieActorsPage = lazy(() => import('../pages/MovieActorsPage/MovieActorsPage'));
const MovieSubPage = lazy(() => import('../pages/MovieSubPage/MovieSubPage'));
const MovieReviewsPage = lazy(() => import( '../pages/MovieReviewsPage/MovieReviewsPage'));



export const App = () => {
  return (
    <>
      
       {/* <MainConteiner/>   */}
     <Suspense fallback={<Loader/>}>    
    <Routes>
  <Route path="/" element={<Layout />}>   
        <Route index element={<HomePage />} />
          <Route path="/movie" element={<MovieSearch />} /> 
       <Route path="movie/:moviesId" element={<MovieSubPage />} >
          <Route path="cast" element={<MovieActorsPage/> } />
          <Route path="reviews" element={<MovieReviewsPage/>  } />
       </Route>   
  </Route>  
          <Route path="*" element={<HomePage />} /> 
</Routes>
        </Suspense> 
    {/* <ToastContainer /> */}
      </>
  )
}