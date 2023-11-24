import { useContext } from "react"
import DataContext from "../context/DataContext";

function Messege() {

  const {messege, setShowMessege } = useContext(DataContext);
  
  const handleClose = () => setShowMessege(false);

  return(
    <div style={{'color':'red', 'border':'2px solid green'}}>
      {messege}
      <button onClick={handleClose}>Close</button>
    </div>
  )
}
export default Messege