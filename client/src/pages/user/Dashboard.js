import React from "react";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <div title={"Dashboard - Ecommerce App"}>
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;






// import React from 'react'
// import { useAuth } from '../../context/auth'
// import UserMenu from '../../components/Layout/UserMenu';
// const Dashboard = () => {
//   const [auth] = useAuth();
//   return (
//     <div title={"Dashboard - Ecommerce App"}>
//       <div className='container-fluid m-3 p-3'>
//         <div className='row'>
//           <div className='col-md-3'>
//             <UserMenu />
//           </div>
//           <div className='card w-75 p-9'>
//             <h3>Admin Name:{auth?.user?.name}</h3>
//             <h3>Admin Email:{auth?.user?.email}</h3>
//             <h3 >Admin address:{auth?.user?.address}</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Dashboard;