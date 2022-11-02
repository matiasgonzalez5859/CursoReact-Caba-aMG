import React from 'react'
import CartWiget from './CartWiget'
import "./NavBar.css";

function NavBar() {
  return (
    <nav  className="nav-menu">
    <ul className="nav-list">
        <li>
            <a href="/">
            <h2>Cabaña MG</h2>
            </a>
        </li>
        <li>
            <a href="/">Raza Vacuna</a>
        </li>
        <li>
            <a href="/">Raza Equina</a>
        </li>
        <li>
            <CartWiget/>
        </li>
        
    </ul>
</nav>
  )
}

export default NavBar