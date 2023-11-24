import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className='menu'>
      <ul>
        <li>
          <Link to="/data/scope">Konstrukcinis elementas</Link>
        </li>
        <li>
          <Link to="/data/subscope">Konstrukcinio Elemento dalis</Link>
        </li>
        <li>
          <Link to="/data/phase">Statybų fazės</Link>
        </li>
        <li>
          <Link to="/data/space">Patalpos/Erdvės</Link>
        </li>
        <li>
          <Link to="/data/supplier">Tiekėjai</Link>
        </li>
        <li>
          <Link to="/data/manufacturer">Gamintojai</Link>
        </li>
        <li>
          <Link to="/data/brand">Produkto serija/brandas</Link>
        </li>
        <li>
          <Link to="/data/product">Produktai</Link>
        </li>
        <li>
          <Link to="/data/service">Paslaugos</Link>
        </li>
        <li>
          <Link to="/data/order">Užsakymai</Link>
        </li>
        <li>
          <Link to="/data/purchase">Įsigyjimai</Link>
        </li>





      </ul>
    </nav>
  )
}

export default Menu;