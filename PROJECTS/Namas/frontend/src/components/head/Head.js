import { Link } from "react-router-dom";

function Head() {
   return (
      <header>
         <img id="logo" src="/img/OIG.jpg" alt="logo" />
         <div>
               <h2>User name </h2>
               <h4>Object address, City</h4>
         </div>
         <nav className="menu">
            <ul>
               <li>
                  <Link to="/">
                     <img src="img/icons/home.png" alt='home page' />
                  </Link>
               </li>
               <li>
                  <Link to="/entrie">
                     <img src="img/icons/euro.png" alt="new purchase" />
                  </Link>
               </li>
               <li>
                  <Link to="/data">
                     <img src="img/icons/index.png" alt="data sourcess" />
                  </Link>
               </li>
            </ul>
         </nav>
      </ header>
   )
}
export default Head;