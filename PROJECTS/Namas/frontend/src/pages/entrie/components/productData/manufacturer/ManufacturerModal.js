import { useContext, useEffect, useState } from "react";
import ManufacturerNewForm from "./ManufacturerNewForm";
import MainContext from "../../../../../functionall/MainContext";
import axios from '../../../../../functionall/defaultURL';
import ManufacturerContext from './ManufacturerContext';

function ManufacturerModal() {

  const { loader, setLoader } = useContext(MainContext);
 
  const [items, setItems] = useState([]);
  const [manufacturer, setManufacturer] = useState("");
  const [showManufacturers, setShowManufacturers] = useState(false);
  const [showNewManufacturerForm, setShowNewManufacturerForm] = useState(false);

  const contextValues = {
    setManufacturer,
    setShowManufacturers,
    setShowNewManufacturerForm
  };

  const spreadManufacturer = () => {
    setLoader(true);
    setShowManufacturers(!showManufacturers);
    axios.get('/manufacturer/last')
      .then(resp => setItems(resp.data))
      .catch(error => console.log('klaida sukeliant tiekėjų sąrašą', error))
      .finally(() => {
        setLoader(false)
      })
    setShowNewManufacturerForm(false);
    setLoader(false);
  }

  const autoSearch = () => {
    // funkcija pasileidžia kiekvieną kartą įvedus/ištrynus simbolį įvedant-ištrinant greitai gali kilti klaida, kadangi praėjus 300ms, value gali būti === ""
    let value = document.getElementById('supplierSearchModal').value.trim();
    if (value === "") {
      setTimeout(() => {
        setLoader(true);
        axios.get('/manufacturer/last') // REIKALINGAS ROUTAS BACKE!!!!!!!!!!!!!!!
          .then(resp => setItems(resp.data))
          .catch(error => console.log('klaida sukeliant tiekėjų sąrašą', error))
          .finally(setLoader(false))
      }, 1000)
    } else {
      setTimeout(handleSearch, 300);
    }
  }

  const handleSearch = () => {
    setLoader(true);
    let value = document.getElementById('manufacturerSearchModal').value.trim()
    axios.get('manufacturer/search/' + value)  // REIKALINGAS ROUTAS BACKE!!!!!!!!!!!!!!!
      .then(resp => setItems(resp.data))
      .catch(error => console.log('klaida ieškant gamintojų', error))
      .finally(() => {
        setLoader(false);
      });
  }

  const showForm = () => {
    setShowNewManufacturerForm(true);
  }
  return (
    <ManufacturerContext.Provider value={contextValues}>
      <div>
        <img src="/img/icons/arrow.png" alt="spread or collect manufacturer selection options"
          className={showManufacturers ? 'spread-box arrow-up' : 'spread-box'} onClick={spreadManufacturer} />
        Gamintojas: {manufacturer && manufacturer}
      </div>

      {showManufacturers &&
        <>
          <div>
            <label className="search" >
              <img className="controll" src="/img/icons/search.png" alt='search' onClick={() => handleSearch()} />
            </label>
            <input id="manufacturerSearchModal"
              type='text' name='search' onChange={() => { autoSearch() }} />
          </div>
          <div>
            <ul className="modal_ul">
              {items && items.map(item =>
                <li key={item.id} onClick={setManufacturer(item.name)}>
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
          </div>
          {showNewManufacturerForm &&  <ManufacturerNewForm />}
        </>
      }
     

      </ ManufacturerContext.Provider>


  )
}


export default ManufacturerModal;