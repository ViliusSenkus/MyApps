import { useContext } from "react";

import SelectorContext from "../../context/SelectorContext";

import SelectorSearch from "./SelectorSearch";
import SelectorItems from "./SelectorItems";
import SelectorForm from "./SelectorForm";

function SelectorModal(props) {

  /*
  Componenet represent modal window with collection of Child components and their props.
  props.name - name of data table to look data for (items).
  props.id - id of input field to put data to.
  */

  const { setShowList, showNewForm, setShowNewForm } = useContext(SelectorContext);

  const closeModal = () => {
    setShowNewForm(false)
    setShowList(false);
  }

  return (
    <div className="modal">
      <SelectorSearch name={props.name} id={props.id}/ >  
      <SelectorItems name={props.name} />
      {showNewForm && <SelectorForm name={props.name}/> }
      <button type="button" onClick={closeModal}>Uždaryti</button>
    </div>
  )
}

export default SelectorModal;