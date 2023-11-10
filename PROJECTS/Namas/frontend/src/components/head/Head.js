import Menu from "../dataPage/menu/Menu";
import { Link } from "react-router-dom";
import IconHome from '../../img/icons/home.png';
import IconNew from '../../img/icons/euro.png';
import IconTable from '../../img/icons/index.png'

function Head() {
   return (
      <header>
         <div>
            <h2>User name </h2>
            <h4>Object address, City</h4>
         </div>
         <nav className="menu">
            <ul>
               <li>
                  <Link to="/">
                     <img src={IconHome} alt='home page' />
                  </Link>
               </li>
               <li>
                  <Link to="/entrie">
                     <img src={IconNew} />
                  </Link>
               </li>
               <li>
                  <Link to="/data">
                     <img src={IconTable} />
                  </Link>
               </li>
            </ul>
         </nav>
      </ header>
   )
}
export default Head;