
import React from 'react'
// import Header from '../components/Layout/Header'
import NewHeader from '../components/Layout/NewHeader'
import Footer from '../components/Layout/Footer'
import {Routes , Route } from 'react-router-dom'
import Register from '../pages/Auth/Register'
import Login from '../pages/Auth/Login'
import ForgotPasssword from '../pages/Auth/ForgotPassword'
// import HomePage from '../pages/userPage/HomePage'
import HomePage from '../pages/userPage/HomePage'
import About from '../pages/userPage/About'
import Contact from '../pages/userPage/Contact'
import Policy from '../pages/userPage/Policy'
import Pagenotfound from '../pages/userPage/PageNotFound'

//user dashboard
import PrivateRoute from '../components/Routes/Private'
import Dashboard from '../pages/user/Dashboard'
import Orders from '../pages/user/Orders'
import Profile from '../pages/user/Profile'
// admin dashboard
import AdminRoute from '../components/Routes/AdminRoute'
import AdminDashboard from '../pages/Admin/AdminDashboard'
import CreateCategory from '../pages/Admin/CreateCategory'
import CreateProduct from '../pages/Admin/CreateProduct'
import Users from '../pages/Admin/Users'
import Products from '../pages/Admin/Products'
import UpdateProduct from '../pages/Admin/UpdateProduct'
import AdminOrders from '../pages/Admin/AdminOrders'
//add css file
import '../styles/RouterApp.css'
// import Search from 'antd/es/transfer/search'
import Search from '../pages/userPage/Search'
import ProductDetails from '../pages/userPage/ProductDetails'
import Categories from '../pages/userPage/Categories'
import CategoryProduct from '../pages/userPage/CategoryProduct'
import CartPage from '../pages/userPage/CartPage'
const AppRouter = () => {
  const headerStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '0%',
  };

  
  return (
    <div>
      
    {/* <Header/> */}
    <NewHeader style={headerStyle}/>
    <main className='main-content'>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/product/:slug' element={<ProductDetails/>} />
    <Route path='/categories' element={<Categories/>} />
    <Route path='/cart' element={<CartPage/>} />
    <Route path='/category/:slug' element={<CategoryProduct/>} />
    
    <Route path='/search' element={<Search/>} />
    <Route path='/Dashboard' element={<PrivateRoute/>}>
      <Route path='user' element={<Dashboard/>}/>
      <Route path='user/orders' element={<Orders/>}/>
      <Route path='user/profile' element={<Profile/>}/>
    </Route>

    <Route path='/Dashboard' element={<AdminRoute/>}>
      <Route path='admin' element={<AdminDashboard/>}/>
    <Route path='admin/create-category' element={<CreateCategory/>}/>
    <Route path='admin/create-product' element={<CreateProduct/>}/>
    <Route path='admin/product/:slug' element={<UpdateProduct/>}/>
    <Route path='admin/products' element={<Products/>}/>
    <Route path='admin/users' element={<Users/>}/>
    <Route path='admin/orders' element={<AdminOrders/>}/>

    </Route>


    <Route path='/register' element={<Register/>}/>
    <Route path='/forgot-password' element={<ForgotPasssword/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/privacy-policy' element={<Policy/>}/>
    <Route path='/*' element={<Pagenotfound/>}/>
   </Routes>
    </main>
    <Footer/>
    </div>
  )
}

export default AppRouter





// import React from 'react'
// // import Header from '../components/Layout/Header'
// import NewHeader from '../components/Layout/NewHeader'
// import Footer from '../components/Layout/Footer'
// import {Routes , Route } from 'react-router-dom'
// import Register from '../pages/Auth/Register'
// import Login from '../pages/Auth/Login'
// import ForgotPasssword from '../pages/Auth/ForgotPassword'
// import HomePage from '../pages/userPage/HomePage'
// import About from '../pages/userPage/About'
// import Contact from '../pages/userPage/Contact'
// import Policy from '../pages/userPage/Policy'
// import Pagenotfound from '../pages/userPage/PageNotFound'

// //user dashboard
// import PrivateRoute from '../components/Routes/Private'
// import Dashboard from '../pages/user/Dashboard'
// import Orders from '../pages/user/Orders'
// import Profile from '../pages/user/Profile'
// // admin dashboard
// import AdminRoute from '../components/Routes/AdminRoute'
// import AdminDashboard from '../pages/Admin/AdminDashboard'
// import CreateCategory from '../pages/Admin/CreateCategory'
// import CreateProduct from '../pages/Admin/CreateProduct'
// import Users from '../pages/Admin/Users'
// import Products from '../pages/Admin/Products'
// import UpdateProduct from '../pages/Admin/UpdateProduct'


// const AppRouter = () => {
//   const headerStyle = {
//     backgroundColor: 'blue',
//     color: 'white',
//     padding: '0%',
//   };
  
//   return (
//     <div>
      
//     {/* <Header/> */}
//     <NewHeader style={headerStyle}/>
//     <main style={{minHeight:'70vh',marginTop:'8%'}}>
//    <Routes>
//     <Route path='/' element={<HomePage/>}/>
//     <Route path='/Dashboard' element={<PrivateRoute/>}>
//       <Route path='user' element={<Dashboard/>}/>
//       <Route path='user/orders' element={<Orders/>}/>
//       <Route path='user/profile' element={<Profile/>}/>
//     </Route>

//     <Route path='/Dashboard' element={<AdminRoute/>}>
//       <Route path='admin' element={<AdminDashboard/>}/>
//     <Route path='admin/create-category' element={<CreateCategory/>}/>
//     <Route path='admin/create-product' element={<CreateProduct/>}/>
//     <Route path='admin/product/:slug' element={<UpdateProduct/>}/>
//     <Route path='admin/products' element={<Products/>}/>
//     <Route path='admin/users' element={<Users/>}/>
//     </Route>


//     <Route path='/register' element={<Register/>}/>
//     <Route path='/forgot-password' element={<ForgotPasssword/>}/>
//     <Route path='/login' element={<Login/>}/>
//     <Route path='/about' element={<About/>}/>
//     <Route path='/contact' element={<Contact/>}/>
//     <Route path='/policy' element={<Policy/>}/>
//     <Route path='/*' element={<Pagenotfound/>}/>
//    </Routes>
//     </main>
//     <Footer/>
//     </div>
//   )
// }

// export default AppRouter