import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/FooterStyle.css'
const Footer = () => {
  return (
      <div className="card text-center">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">Ecommerce Shopping</h5>
    <p className="card-text">An e-commerce website offers a seamless and convenient platform for online shopping, providing customers with access of products and services from the comfort of their own homes. With user-friendly interfaces and secure payment gateways, allowing users to browse, compare, and purchase items with ease. offering a hassle-free way to shop anytime, anywhere.
</p>
    <NavLink to="/" className="btn btn-primary">Go To HomePage</NavLink>
    <NavLink to="/about" className="nav-link text-muted ">About</NavLink>
    <NavLink to="/contact" className="nav-link text-muted">Contact</NavLink>
    <NavLink to="/privacy" className="nav-link text-muted">Privacy</NavLink>
  </div>
  <div className="card-footer text-body-secondary">
    2 days ago
  </div>
</div>

  )
}

export default Footer














// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-light text-dark py-6">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6 text-center text-md-start mb-2">
//             <NavLink to="/" className="navbar-brand d-flex align-items-center text-dark">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h10 text-indigo-500 p-2 bg-white rounded-full" viewBox="0 0 24 24">
//                 <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//               </svg>
//               <span className="ms-3 text-xl">E-Commerce</span>
//             </NavLink>
//             <p className="mt-2 text-sm text-gray-500">Indulge in seamless shopping at our online store, where style meets convenience. Explore an exquisite collection of fashion-forward attire and accessories, curated just for you. Elevate your wardrobe effortlessly with our trend-setting designs and enjoy a shopping experience that's as chic as our products.</p>
//           </div>
//           <div className="col-md-6">
//             {/* Repeat the category sections as needed */}
//             <div className="col-md-3">
//               <h2 className="title-font font-medium text-dark tracking-widest text-sm mb-3">CATEGORIES</h2>
//               <ul className="list-unstyled mb-3">
//                 <li>
//                   <NavLink to="/About" className="text-gray-500 hover-text-dark text-decoration-none">About</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/Contact" className="text-gray-500 hover-text-dark text-decoration-none">Contact</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/Policy" className="text-gray-500 hover-text-dark text-decoration-none">Privacy</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/Help" className="text-gray-500 hover-text-dark text-decoration-none">Help</NavLink>
//                 </li>
//               </ul>
//             </div>
//             {/* Repeat the category sections as needed */}
//           </div>
//         </div>
//       </div>
//       <div className="bg-gray-100 py-3">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6 text-center text-md-start mb-0">
//               <p className="text-gray-500 text-sm">
//                 © 2024 E-Commerce —
//                 <NavLink to="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-dark ms-1" target="_blank">@Ubaid ullah</NavLink>
//               </p>
//             </div>
//             <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
//               <NavLink to='/' className="text-gray-500 me-3">
//                 <i className="bi bi-twitter text-2xl"></i>
//               </NavLink>
//               <NavLink to='/'className="text-gray-500 me-3">
//                 <i className="bi bi-facebook text-2xl"></i>
//               </NavLink>
//               <NavLink to='/' className="text-gray-500 me-3">
//                 <i className="bi bi-instagram text-2xl"></i>
//               </NavLink>
//               <NavLink to='/' className="text-gray-500">
//                 <i className="bi bi-github text-2xl"></i>
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
