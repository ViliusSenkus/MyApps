import Menu from "./menu/Menu";
import './header.css';
import { Link } from "react-router-dom";

function Header() {
   return (
      <>
         <div class="menu">
            <div>
               <h2>User name </h2>
               <h4>Object address, City</h4>
            </div>

            <nav>
               <ul>
                  <li>
                     <Link to="/">Statistic</Link>
                  </li>
                  <li>
                     <Link to="/entrie">New entrie</Link>
                  </li>
               </ul>
            </nav>
         </div>
      </>
   )
}
export default Header;