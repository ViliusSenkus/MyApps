import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className='container'>
      <ul>
        <li>
          <Link to="/entrie/purchase">Įsigyjimai</Link>
        </li>
        <li>
          <Link to="/entrie/product">Produktai</Link>
        </li>
        <li>
          <Link to="/entrie/service">Paslaugos</Link>
        </li>
        <li>
          <Link to="/entrie/order">Užsakymai</Link>
        </li>
        <li>
          <Link to="/entrie/supplier">Tiekėjai</Link>
        </li>
        <li>
          <Link to="/entrie/space">Patalpos</Link>
        </li>
        <li>
          <Link to="/entrie/phase">Statybų fazės</Link>
        </li>
        <li>
          <Link to="/entrie/scope">Įsigyjimų pritaikymo vietos</Link>
        </li>
        <li>
          <Link to="/entrie/manufacturer">Gamintojai</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;