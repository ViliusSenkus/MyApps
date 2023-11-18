import { useContext } from "react";

import SelectorContext from "../../context/SelectorContext";

import SelectorSearch from "./selectorSearch";

function SelectorModal(props) {

  const { setShowList } = useContext(SelectorContext);

  const closeModal = () => {
    setShowList(false);
  }
  return (
    <div className="modal">
      <SelectorSearch name={props.name} / >
      {/* Search field */}
      {/* Selection  part + add button*/}
      {/* new item Form */}
      {/* return button */}
      <button type="button" onClick={closeModal}>Uždaryti</button>
    </div>
  )
}

export default SelectorModal;