import { useContext } from "react";
import MainContext from "../../context/MainContext";

function Alert(){

      const{alert}=useContext(MainContext);

      return alert &&  <div className={'alert alert-'+ alert.s}>{alert.m}</div>
      
}

export default Alert;