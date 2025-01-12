import React from 'react'
import './Navbar.css'
import {Link,NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <NavLink to='/' className={({isActive}) => isActive ? "active-link" : ""}> 
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to='/about' className={({isActive}) => isActive ? "active-link" : ""}>
                About
            </NavLink>
        </li>
        <li>
            <NavLink to='/dashboard' className={({isActive}) => isActive ? "active-link" : ""}>
                Dashboard
            </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
