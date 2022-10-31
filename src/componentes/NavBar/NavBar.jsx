import React from 'react'
import CartWiget from './CartWiget'

function NavBar() {
  return (
    <nav>
    <ul>
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