import { useContext } from "react";

import SelectorContext from "../../context/SelectorContext";

import SelectorSearch from "./SelectorSearch";
import SelectorItems from "./SelectorItems";
import SelectorForm from "./SelectorForm";

function SelectorModal(props) {

  const { setShowList, showNewForm } = useContext(SelectorContext);

  const closeModal = () => {
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