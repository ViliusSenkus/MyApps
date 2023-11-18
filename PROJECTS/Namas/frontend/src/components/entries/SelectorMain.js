import { useState } from 'react';

import SelectorContext from '../../context/SelectorContext';

import SelectorModal from './SelectorModal';


function SelectorMain(props) {

  const [value, setValue] = useState("");
  const [showList, setShowList] = useState(false);
  const [items, setItems] = useState([]);
  const [showNewForm, setShowNewForm] = useState(false);

  const contextValues = {
    setShowList,
    items,
    setItems,
    setValue,
    showNewForm,
    setShowNewForm
  }

  const name = props.name.charAt(0).toUpperCase() + (props.name.toLowerCase()).slice(1);
  const id = props.name.toLowerCase() + "Input";


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
          <input id={id} type="text" className="entrie-form-input" name="supplier_id" value={value} onChange={() => { }} disabled />
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