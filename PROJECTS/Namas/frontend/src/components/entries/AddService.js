import { useContext } from "react";
import SelectorMain from "./SelectorMain";
import EntrieContext from "../../context/EntrieContext";

function AddService(){

  const { setAddService } = useContext(EntrieContext);

  const handleClose = () => {
    setAddService(false);
  }
  return(
    <div>
      vieta paslaugos duomenims įvesti
      <button onClick={handleClose}>Close</button>
    </div>
  )
}
export default AddService;