import { useContext } from "react";

import MainContext from "../../../functionall/MainContext";

import axios from '../../../functionall/defaultURL';
import SelectorContext from "../../../context/SelectorContext";

function NewManufacturerForm() {

  const {setLoader} = useContext(MainContext);
  const {setValue, setShowList, setShowNewForm, setManufacturer} = useContext(SelectorContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    // here data validation should go. At least one first positioin should be filled.
    const data = new FormData(e.target);
    axios.post('/manufacturer', data)
      .then(resp => {
         setValue(data.get('name'));  //value added to form
         setManufacturer(resp.data);  //id of manufacturer
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => { 
        // !!!jeigu nesigavo sukurti geriau rodyti klaida.
        setShowNewForm(false);
        setShowList(false);
        axios.get('/manufacturer')
        setLoader(false);
       });
  }

  return(
    <>
    <form onSubmit={handleSubmit}>
      <h4 >Sukurti naują gamintoją</h4>
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

export default NewManufacturerForm;