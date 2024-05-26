import React from 'react'
import { NavLink } from 'react-router-dom'
const UserMenu = () => {
  return (
    <>


{/* <div className="text-center">
  <div className="list-group dashboard-menu">
    <h4>Dashboard</h4>
    <NavLink
      to="/dashboard/user/profile"
      className="list-group-item list-group-item-action"
      activeStyle={{
        fontWeight: "bold", // Example style for when the link is active
        color: "blue" // Example color for when the link is active
      }}
    >
      profile
    </NavLink>
    <NavLink
      to="/dashboard/user/orders"
      className="list-group-item list-group-item-action"
      activeStyle={{
        fontWeight: "bold", // Example style for when the link is active
        color: "blue" // Example color for when the link is active
      }}
    >
      Orders
    </NavLink>
  </div>
</div> */}

     <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          > 
            Orders
          </NavLink>
        </div>
      </div>

    </>
  )
}

export default UserMenu