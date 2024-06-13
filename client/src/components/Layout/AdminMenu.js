import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <>
    <div className="text-center">
    <div className="list-group">
<h1>Admin Panel</h1>
  <NavLink to="/admin/create-category" className="list-group-item list-group-item-action">Create Category</NavLink>
  <NavLink to="/admin/create-product"  className="list-group-item list-group-item-action">Create Product</NavLink>
  <NavLink to="/admin/products"  className="list-group-item list-group-item-action">Products</NavLink>
  <NavLink to="/admin/orders"  className="list-group-item list-group-item-action">Orders</NavLink>
  <NavLink to="/admin/users"  className="list-group-item list-group-item-action">Users</NavLink>
  
</div>
</div>

    </>
  )
}

export default AdminMenu
