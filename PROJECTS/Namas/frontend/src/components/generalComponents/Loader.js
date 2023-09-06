import './loader.css';
import { useContext } from "react";
import MainContext from "../../MainContext";

function Loader() {

  const { loader } = useContext(MainContext);
  
  return
  loader && 
                  <h1>Kraunama...</h1>
}

export default Loader;