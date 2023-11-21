import { useState } from 'react';

import SelectorContext from '../../context/SelectorContext';

import SelectorModal from './SelectorModal';


function SelectorMain(props) {

  /*
   Compenent represents "spreadable" input field value of which is inputed automatically through further selections.
   As well all variables states is registered here.
   */

  const [value, setValue] = useState(""); // selected value
  const [showList, setShowList] = useState(false); //modal window
  const [items, setItems] = useState([]);  // info from DB recived throug get request.
  const [showNewForm, setShowNewForm] = useState(false); // new Form 
  const [id, setId] = useState(""); //id of selected or newly created item in DB

  // product dependable variables
  const [manufacturer, setManufacturer] = useState("");  //selected manufacturer Id
  const [brand, setBrand] = useState("") ;              //selected Brand Id

  const contextValues = {
    setShowList,
    items,
    setItems,
    setValue,
    showNewForm,
    setShowNewForm,

    // product related data sharing:
    manufacturer, setManufacturer, brand, setBrand,
    setId
  }

  const name = props.name.charAt(0).toUpperCase() + (props.name.toLowerCase()).slice(1);
  const valueId = props.name.toLowerCase() + "Input";


  const spread = () => {
    setShowList(!showList);
  }

  return (
    <SelectorContext.Provider value={contextValues}>
      {/* Main field for form and spread selector */}
      <div className='two-col-grid'>
        <label className="entrie-form-label">
          {name}
        </label>
        <div>
          <input id={valueId} type="text" className="entrie-form-input" name="supplier_id" value={value} itemId={id} onChange={() => { }} disabled />
          {showList ?
            <img src="/img/icons/arrow.png" alt="close selectables" onClick={spread} className='spread-box arrow-up' />
            :
            <img src="/img/icons/arrow.png" alt="spread selectables" onClick={spread} className='spread-box arrow-down' />
          }
        </div>
      </div>

      {showList && <SelectorModal name={props.name} id={props.id} /> }

    </SelectorContext.Provider>
  )
}

export default SelectorMain;