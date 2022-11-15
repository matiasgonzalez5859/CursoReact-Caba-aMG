import React from 'react'
import CartWiget from './CartWiget'
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
      <nav className="nav-menu">
        <ul className="nav-list">
          <li>
            <Link to="/">
              <h2>Cabaña MG</h2>
            </Link>
          </li>
          <li>
            <Link to="/category/Vacunos">VACUNOS</Link>
          </li>
          <li>
            <Link to="/category/Equinos">EQUINOS</Link>
          </li>
          <li>
            <Link to="/category/Granos">GRANOS</Link>
          </li>
          <li>
            <CartWiget/>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;