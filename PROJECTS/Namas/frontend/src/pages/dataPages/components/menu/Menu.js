import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className='menu'>
      <ul>
        <li>
          <Link to="/data/purchase">Įsigyjimai</Link>
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
          <Link to="/data/supplier">Tiekėjai</Link>
        </li>
        <li>
          <Link to="/data/space">Patalpos</Link>
        </li>
        <li>
          <Link to="/data/phase">Statybų fazės</Link>
        </li>
        <li>
          <Link to="/data/scope">Įsigyjimų pritaikymo vietos</Link>
        </li>
        <li>
          <Link to="/data/manufacturer">Gamintojai</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;