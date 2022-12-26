import React from "react";
import styles from 'components/Pagination/Pagination.module.css'
 const Pagination = ({total,totalPages,paginate}) => {
     const pageNumbers = []   
     for (let i = 1; i <= Math.ceil(totalPages / total); i++){
       pageNumbers.push(i)
     }
     return (
         <div>
             <ul>
                 {
                     pageNumbers.map(number => (
                         <li className={styles.item} key={number}>
                             <a href="!#" className={styles.link} onClick={() =>paginate(number)}>
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
