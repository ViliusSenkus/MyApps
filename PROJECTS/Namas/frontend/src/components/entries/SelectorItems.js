import { useContext, useEffect } from "react";

import SelectorContext from "../../context/SelectorContext";
import MainContext from "../../functionall/MainContext";

import axios from '../../functionall/defaultURL';

function SelectorItems(props) {

  const { setShowList,items, setItems, setValue, setShowNewForm } = useContext(SelectorContext);
  const { setLoader } = useContext(MainContext);

  useEffect(()=>{
    setLoader(true);
    axios.get('/' + props.name + '/last')
      .then(resp => setItems(resp.data))
      .catch(error => console.log('klaida sukeliant ' + props.name + ' sąrašą', error))
      .finally(() => {
        setLoader(false)
      }
      )
  },[])

  const setSelection = (name) => {
        //Formoje atvaizduoja pasirinktą tiekėją 
        setShowList(false);
        setValue(name);
        setShowNewForm(false);
  }

  const openNewItemForm = () => {
    setShowNewForm(true);

  }

  return (
    <ul className="modal_ul">
      {items && items.map(item =>
        <li key={item.id} onClick={() => setSelection(item.name)}>
          <img src={item.logo} alt={item.name} />
          <br />
          {item.name}
        </li>
      )
      }
      <li>

        <img className="modal-add" src="/img/icons/plus.png" alt='add new supplier' onClick={openNewItemForm} />
        <br />
        Naujas
      </li>
    </ul>
  )
}

export default SelectorItems;