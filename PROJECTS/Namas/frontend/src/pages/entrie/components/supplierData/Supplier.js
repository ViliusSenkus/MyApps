import axios from '../../../../functionall/defaultURL';
import { useContext, useEffect, useState } from 'react';
import MainContext from "../../../../functionall/MainContext";
import Loader from '../../../../components/generalComponents/Loader';
import { Link } from "react-router-dom";
import SupplierForm from './SupplierForm';
function Supplier() {

  const { loader, setLoader, newSupplier, setNewSupplier } = useContext(MainContext);

  const [items, setItems] = useState([]);
  const [showSupplierForm, setShowSupplierForm] = useState(false);

  useEffect(() => {
    setLoader(true);
    axios.get('/supplier')
      .then(resp => setItems(resp.data))
      .catch(error => console.log('klaida sukeliant tiekėjų sąrašą', error))
      .finally(() => {
        setLoader(false)
      }
      )
  }, [])

  const showForm = () => {
    setShowSupplierForm(true);
  }
  const addToForm = (name) => {
    //Formoje atvaizduoja pasirinktą tiekėją 
    setShowSupplierForm(false);
    setNewSupplier(name);
  }

  return (
    <>
      {loader && <Loader />}

      {/* PAIEŠKOS LAUKELIS */}
      <div className='menu'>
        <label>
          <img src="/img/icons/search.png" alt='search' />
        </label>
        <input type='text' name='search' />
      </div>

      {/* SĄRAŠAS (iki 5 vienetų + '+') */}
      <div className='menu'>
        <ul>
          {items && items.map(item =>
            <li key={item.id} onClick={() => addToForm(item.name)}>
              {item.name}
              <br />
              <img src={item.logo} alt={item.name} />
            </li>
          )
          }
          <li>
            Naujas
            <br />
            <img src="/img/icons/plus.png" alt='add new supplier' onClick={showForm} />
          </li>
        </ul>
      </div>

      {/* NAUJO PARDAVĖJO FORMA */}
      {showSupplierForm && <SupplierForm />}

    </>
  )
}

export default Supplier;










