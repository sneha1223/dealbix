// // // import React, { useEffect } from 'react'
// // // import { useDispatch, useSelector } from 'react-redux'
// // // import { fetchFetauredList, getFeaturedList } from '../Slices/CategorySlice'
// // // import { imageUrl } from '../Constant'
// // // import ReactOwlCarousel from 'react-owl-carousel'
// // // import { Button,Pagination } from 'react-bootstrap'

// // // function Sid() {
// // //     const dispatch = useDispatch()
// // //     const carousel = useSelector(getFeaturedList)
// // //     console.log(carousel,"carousel");

// // //     useEffect(()=>{
// // //         dispatch(fetchFetauredList(getFeaturedList))
// // //     },[dispatch])
// // //   return (
// // //     <div>
// // //  <Pagination>
// // //       <Pagination.First />
// // //       <Pagination.Prev />
// // //       <Pagination.Item>{1}</Pagination.Item>
// // //       <Pagination.Ellipsis />

// // //       <Pagination.Item>{10}</Pagination.Item>
// // //       <Pagination.Item>{11}</Pagination.Item>
// // //       <Pagination.Item active>{12}</Pagination.Item>
// // //       <Pagination.Item>{13}</Pagination.Item>
// // //       <Pagination.Item disabled>{14}</Pagination.Item>

// // //       <Pagination.Ellipsis />
// // //       <Pagination.Item>{20}</Pagination.Item>
// // //       <Pagination.Next />
// // //       <Pagination.Last />
// // //     </Pagination>
         
// // //     </div>
// // //   )
// // // }

// // // export default Sid

// // import React, { useState } from 'react';

// // const Pagination = ({ totalItems, itemsPerPage }) => {
// //   const totalPages = Math.ceil(totalItems / itemsPerPage);
// //   const [currentPage, setCurrentPage] = useState(1);

// //   const handlePageChange = (pageNumber) => {
// //     setCurrentPage(pageNumber);
// //     // You can implement the logic to fetch data for the new page here if needed.
// //   };

// //   return (
// //     <div className="pagination">
// //       <button
// //         disabled={currentPage === 1}
// //         onClick={() => handlePageChange(currentPage - 1)}
// //       >
// //         Previous
// //       </button>
// //       {Array.from({ length: totalPages }, (_, index) => (
// //         <button
// //           key={index}
// //           onClick={() => handlePageChange(index + 1)}
// //           className={currentPage === index + 1 ? 'active' : ''}
// //         >
// //           {index + 1}
// //         </button>
// //       ))}
// //       <button
// //         disabled={currentPage === totalPages}
// //         onClick={() => handlePageChange(currentPage + 1)}
// //       >
// //         Next
// //       </button>
// //     </div>
// //   );
// // };

// // export default Pagination;

// import React, { useState } from 'react';

// const Pagination = ({ itemsPerPage, data }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   // Logic to calculate the index of the first and last item on the current page
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   // Logic to change the current page
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       {/* Display your items from the currentItems array */}
//       {currentItems.map(item => (
//         <div key={item.id}>{item.name}</div>
//       ))}

//       {/* Pagination controls */}
//       <div>
//         {data.length > itemsPerPage && (
//           <ul className="pagination">
//             {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
//               <li key={index} onClick={() => handlePageChange(index + 1)}>
//                 <button>{index + 1}</button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Pagination;

