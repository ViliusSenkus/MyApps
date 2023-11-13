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
        <label>
          <img className="controll" src="/img/icons/search.png" alt='search' />
        </label>
        <input style={{border: "1px solid white"}} type='text' name='search' />
      

      {/* SĄRAŠAS (iki 5 vienetų + '+') */}
        <ul>
          {items && items.map(item =>
            <li key={item.id} onClick={() => addToForm(item.name)} 
                style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width:"120px"}}>
              {item.name}
              <br />
              <img style={{maxWidth: "80px", maxHeight: "20px"}} src={item.logo} alt={item.name} />
            </li>
          )
          }
          <li>
            Naujas
            <br />
            <img src="/img/icons/plus.png" alt='add new supplier' onClick={showForm} />
          </li>
        </ul>
      

      {/* NAUJO PARDAVĖJO FORMA */}
      {showSupplierForm && <SupplierForm />}

    </>
  )
}

export default Supplier;










