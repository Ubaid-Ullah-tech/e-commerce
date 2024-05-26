import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <div>
      {/* its 3 not 6 container-fluid m-6  */}
      <div className="container-fluid m-6 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-95 p-3">
              <h3> Admin Name : {auth?.user?.name}</h3>
              <h3> Admin Email : {auth?.user?.email}</h3>
              <h3> Admin Contact : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;


// import React from 'react'
// import AdminMenu from '../../components/Layout/AdminMenu'
// import { useAuth } from '../../context/auth'
// const AdminDashboard = () => {
//   const [auth]= useAuth()
//   return (
//     <div>
//     <div className='container-fluid m-3 p-3'>
//       <div className='row'>
//         <div className='col-md-3'> <AdminMenu/></div>
//         <div className='col-md-9'>
//           <div className='card w-75 p-3'>
//            <h1>Admin Name:{auth?.user?.name}</h1>
//            <h1>Admin Email:{auth?.user?.email}</h1>
//            <h1>Admin Phone:{auth?.user?.phone}</h1>
//           </div>
//         </div>

//       </div>

//     </div>
//     </div>
//   )
// }

// export default AdminDashboard