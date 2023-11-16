import axios from 'axios';
import ManufacturerForm from './ManufacturerForm';

import { useContext, useEffect, useState } from 'react';
import MainContext from '../../../../functionall/MainContext';

import Loader from '../../../../components/generalComponents/Loader';

function ProductNewModal() {

  const { loader, setLoader } = useContext(MainContext);
  const [showManufacturerForm, setShowManufacturerForm] = useState(false);
  const [showHideManufacturers, setShowHideManufacturers] = useState(false);
  const [newManufacturer, setNewManufacturer] = useState(false);
  const [showBrandForm, setShowBrandForm] = useState(false);
  const [items, setItems] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // here data validation should go. At least three first positioins should be filled.
  //   const data = new FormData(e.target);
  //   setLoader(true)
  //   axios.post('http://localhost:8000/api/product', data)
  //     .then(resp => {
  //       console.log(resp.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  //     .finally(() => { setLoader(false) });
  // }

  useEffect(() => {
    setLoader(true);
    axios.get('/manufacturer/last')
      .then(resp => setItems(resp.data))
      .catch(error => console.log('klaida sukeliant gamintojų sąrašą', error))
      .finally(() => {
        setLoader(false)
      }
      )
  }, [])

  const showForm = (table) => {
    switch(table){
      case "manufacturer" :
        setShowManufacturerForm(true);
        break;
      case "brand" :
        setShowBrandForm(true);
        break;
      default: 
        return
    }
    console.log('dabar turi b8ti rodoma', table, 'forma');
  }
  const addToForm = (table, name) => {
    setShowManufacturerForm(false);
    setNewManufacturer(name);
    setShowHideManufacturers(false);
    console.log('reikia prideti ', table, ' reikšmę į laukęlį vėlesniam perdavimui i lentelnę tikroje formoje')
  }

  const autoSearch = (table) => {
    // funkcija pasileidžia kiekvieną kartą įvedus/ištrynus simbolį įvedant-ištrinant greitai gali kilti klaida, kadangi praėjus 300ms, value gali būti === ""
    let value = document.getElementById('supplierSearchModal').value.trim();
    if (value === ""){
      setTimeout(()=>{
        setLoader(true);
        axios.get('/'+table+'/last')
        .then(resp => setItems(resp.data))
        .catch(error => console.log('klaida sukeliant tiekėjų sąrašą', error))
        .finally(setLoader(false))
      }, 1000)
    }else{
      setTimeout (handleSearch, 300); 
    }
  }
      
  const handleSearch = (table) => {
    setLoader(true);
    let value = document.getElementById(table+'SearchModal').value.trim()
    axios.get(table+'/search/'+ value)
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
            <img className="controll" src="/img/icons/search.png" alt='search' onClick={() => handleSearch('manufacturer')} />
          </label>
          <input id="manufacturerSearchModal"
                type='text' name='search' onChange={()=>{autoSearch('manufacturer')}} />
        </div>


        {/* SĄRAŠAS (iki 5 vienetų + '+') */}
        <ul id="manufacturer_modal_ul">
          {items && items.map(item =>
            <li key={item.id} onClick={() => addToForm('manufacturer', item.name)}>
              <img src={item.logo} alt={item.name} />
              <br />
              {item.name}
            </li>
          )
          }
          <li>

            <img className="modal-add" src="/img/icons/plus.png" alt='add new manufacturer' onClick={()=>showForm('manufacturer')} />
            <br />
            Naujas
          </li>
        </ul>


        {/* NAUJO PARDAVĖJO FORMA */}
        {showManufacturerForm && <ManufacturerForm />}
      </div>
    </>
    // <>
    //   
    //   <form onSubmit={handleSubmit}>
    //     <div className="inputField">
    //       <label>Manufacturer</label>
    //       <input type="text" name="manufacturer" />
    //     </div>
    //     <div className="inputField">
    //       <label>Name</label>
    //       <input type="text" name="name" />
    //     </div>
    //     <div className="inputField">
    //       <label>Description of product (generall for all same type products)</label>
    //       <input type="text" name="description" /> {/* chane to select */}
    //     </div>
    //     <div className="inputField">
    //       <label>Picture Link</label>
    //       <input type="link" name="photo" /> {/* chane to select */}
    //     </div>
    //     <div className="inputField">
    //       <label>Units of measurement (kg, m, buckets, etc.)</label>
    //       <input type="text" name="measurement_unit" /> {/* chane to select */}
    //     </div>
    //     <button type="submit">Save</button>
    //   </form>
    // </>
  )
}

export default ProductNewModal;