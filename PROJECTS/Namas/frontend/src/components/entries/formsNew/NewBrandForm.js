import { useContext, useEffect } from "react";

import MainContext from "../../../functionall/MainContext";

import axios from '../../../functionall/defaultURL';
import SelectorContext from "../../../context/SelectorContext";

function NewBrandForm() {

  const { setLoader } = useContext(MainContext);
  const { setValue, setShowList, setShowNewForm, manufacturer, setManufactuer, setBrand } = useContext(SelectorContext);


    setLoader(true);
    axios.get('/manufacturer/name/caparol')
      .then(resp => setManufactuer(resp.data[0].id))
      .catch(error => console.log('klaida ieskant gamintojo Id', error))
      .finally(setLoader(false));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    // here data validation should go. At least one first positioin should be filled.
    const data = new FormData(e.target);
    axios.post('/brand', data)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setValue(data.get('name'));  // !!!jeigu nesigavo sukurti geriau rodyti klaida.
        setShowNewForm(false);
        setShowList(false);
        setLoader(false);
        setBrand(data.get('name'));
        console.log(data.get('name'));
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4 >Sukurti naują produktų seriją gamintojui {manufacturer} </h4>
        
        <input type='number' name='manufacturer_id' value={manufacturer} />
        <div className="inputField supplier-modal-form">
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div className="inputField supplier-modal-form">
          <label>Description</label>
          <textarea name='description'></textarea>
        </div>
        <div className="inputField supplier-modal-form">
          <label>Link to supplier logo or photo</label>
          <input type="text" name="logo" />
          <label className="end-lable menu">
            <img src="/img/icons/add-file.png" alt="add file" />
          </label>
        </div>
        <div className="inputField supplier-modal-form">
          <label>Link to official page</label>
          <input type="link" name="link" />
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default NewBrandForm;