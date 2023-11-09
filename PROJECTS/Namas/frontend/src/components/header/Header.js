import Menu from "./menu/Menu";
import { Link } from "react-router-dom";

function Header() {
   return (
      <>
         <div className="container">
            <div>
               <h2>User name </h2>
               <h4>Object address, City</h4>
            </div>

            <nav className="menu">
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