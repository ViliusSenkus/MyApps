import axios from '../../../../functionall/defaultURL';
import { useContext, useEffect, useState } from 'react';
import MainContext from "../../../../functionall/MainContext";
import Loader from '../../../../components/generalComponents/Loader';
import { Link } from "react-router-dom";
import SupplierForm from './SupplierForm';
import EntrieContext from '../../EntrieContext';
function Supplier() {

  const { loader, setLoader, newSupplier, setNewSupplier } = useContext(MainContext);

  const [items, setItems] = useState([]);
  const [showSupplierForm, setShowSupplierForm] = useState(false);
  const { setShowHideSuppliers } = useContext(EntrieContext);

  useEffect(() => {
    setLoader(true);
    axios.get('/supplier/last')
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
    setShowHideSuppliers(false);
  }

  const autoSearch = () => {
    // funkcija pasileidžia kiekvieną kartą įvedus/ištrynus simbolį įvedant-ištrinant greitai gali kilti klaida, kadangi praėjus 300ms, value gali būti === ""
    let value = document.getElementById('supplierSearchModal').value.trim();
    if (value === ""){
      setTimeout(()=>{
        setLoader(true);
        axios.get('/supplier/last')
        .then(resp => setItems(resp.data))
        .catch(error => console.log('klaida sukeliant tiekėjų sąrašą', error))
        .finally(setLoader(false))
      }, 1000)
    }else{
      setTimeout (handleSearch, 300); 
    }
  }
      
  const handleSearch = () => {
    setLoader(true);
    let value = document.getElementById('supplierSearchModal').value.trim()
    axios.get('supplier/search/' + value)
      .then(resp => setItems(resp.data))
      .catch(error => console.log('klaida ie6kant tiekėjų', error))
      .finally(() => {
        setLoader(false);
      });
  }

  return (
    <>
      {loader && <Loader />}

      <div className="modal">
        {/* PAIEŠKOS LAUKELIS */}
        <div>
          <label className="search" >
            <img className="controll" src="/img/icons/search.png" alt='search' onClick={() => handleSearch()} />
          </label>
          <input id="supplierSearchModal" type='text' name='search' onChange={autoSearch} />
        </div>


        {/* SĄRAŠAS (iki 5 vienetų + '+') */}
        <ul className="modal_ul">
          {items && items.map(item =>
            <li key={item.id} onClick={() => addToForm(item.name)}>
              <img src={item.logo} alt={item.name} />
              <br />
              {item.name}
            </li>
          )
          }
          <li>

            <img className="modal-add" src="/img/icons/plus.png" alt='add new supplier' onClick={showForm} />
            <br />
            Naujas
          </li>
        </ul>


        {/* NAUJO PARDAVĖJO FORMA */}
        {showSupplierForm && <SupplierForm />}
      </div>
    </>
  )
}

export default Supplier;










