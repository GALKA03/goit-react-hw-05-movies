// import React from "react";
// import styles from 'components/Pagination/Pagination.module.css'
// import ReactPaginate from 'react-paginate';


// const Pagination = ({totalResults,paginate}) => {
//  const totalPages = 20;
    
// //   return (
// //     <>
// //         {/* <HomePage currentItems={currentItems} />   */}
// //       <ReactPaginate
// //         breakLabel="..."
// //         nextLabel="next >"
// //         onPageChange={handlePageClick}
// //         pageRangeDisplayed={10}
// //         pageCount={pageCount}
// //         previousLabel="< previous"
// //         renderOnZeroPageCount={null}
// //       />
// //     </>
// //   );

// const pageNumbers = []   
//      for (let i = 1; i <= Math.ceil(totalPages / totalResults); i++){
//        pageNumbers.push(i)
//      }
//      return (
//          <div>
//              <ul>
//                  {
//                      pageNumbers.map(number => (
//                          <li className={styles.item} key={number}>
//                              <a href="!#" className={styles.link} onClick={() =>paginate(number)}>
//                                  {number}
//                              </a>
//     <ReactPaginate
//         breakLabel="..."
//         nextLabel="next >"
//         // onPageChange={handlePageClick}
//         pageRangeDisplayed={10}
//         // pageCount={pageCount}
//         previousLabel="< previous"
//         renderOnZeroPageCount={null}
//       />
//                          </li>
//                      ))
//                  }
//              </ul>
//         </div>
//      )
 
// }
// export default Pagination;
