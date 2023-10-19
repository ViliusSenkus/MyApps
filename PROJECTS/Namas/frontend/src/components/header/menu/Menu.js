import './menu.css'

import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">pirkimų lentelė</Link>
        </li>
        <li>
          <Link to="/new">naujas pirkimas</Link>
        </li>
        <li>
          <Link to="/products">produktų sąrašas</Link>
        </li>
        <li>
          <Link to="/products/new">naujas produktas</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;