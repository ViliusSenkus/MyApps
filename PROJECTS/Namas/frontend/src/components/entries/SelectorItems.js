import { useContext, useEffect } from "react";

import SelectorContext from "../../context/SelectorContext";
import MainContext from "../../functionall/MainContext";

import axios from '../../functionall/defaultURL';

function SelectorItems(props) {

  const { setShowList, items, setItems, setValue, setShowNewForm, setId } = useContext(SelectorContext);
  const { setLoader } = useContext(MainContext);

  const SupplierId = document.getElementById('supplierInput').getAttribute('itemId');
  const ManufacturerId = document.getElementById('manufacturerInput').getAttribute('itemId');
  const BrandId = document.getElementById('brandInput').getAttribute('itemId');

  useEffect(() => {
    setLoader(true);
    axios.post('/find/'+props.name, {"SupplierId":SupplierId, "ManufacturerId":ManufacturerId, "BrandId":BrandId} )
    .then(resp => setItems(resp.data))
    .catch(error => console.log("klaida selector Items axiose su perduodamu objektu", error))
    .finally(setLoader(false));

    // axios.get('/' + props.name + '/last')
    //   .then(resp => setItems(resp.data))
    //   .catch(error => console.log('klaida sukeliant ' + props.name + ' sąrašą', error))
    //   .finally(() => {
    //     setLoader(false)
    //   }
    //   )
  }, [])

  const setSelection = (name, id) => {
    //Formoje atvaizduoja pasirinktą tiekėją 
    setShowList(false);
    setValue(name);
    setId(id)
    setShowNewForm(false);
  }

  const openNewItemForm = () => {
    setShowNewForm(true);

  }

  return (
    <ul className="modal_ul">
      {items && items.map(item =>
        <li key={item.id} onClick={() => setSelection(item.name, item.id)}>
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