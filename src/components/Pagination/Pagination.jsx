import React from "react";
import styles from 'components/Pagination/Pagination.module.css'
import ReactPaginate from 'react-paginate';


const Pagination = ({totalPages,totalMovies,paginate}) => {

const pageNumbers = []   
     for (let i = 1; i <= Math.ceil(totalPages / totalMovies); i++){
       pageNumbers.push(i)
     }
     return (
         <div>
             <ul className="pagination">
                 {
                     pageNumbers.map(number => (
                         <li className="page-item" key={number}>
                             <a href="!#" className="page-link" onClick={() =>paginate(number)}>
                                 {number}
                             </a>
  
                         </li>
                     ))
                 }
             </ul>
        </div>
     )
 
}
export default Pagination;
