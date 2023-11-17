import { useContext } from "react";
import MainContext from "../../../../../functionall/MainContext";
import ManufacturerContext from "./ManufacturerContext";
import axios from "axios";

function ManufacturerNewForm() {

  const { setLoader, setNewSupplier } = useContext(MainContext);
  const { setManufacturer, setShowManufacturers, setShowNewManufacturerForm } = useContext(ManufacturerContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    // here data validation should go. At least one first positioin should be filled.
    const data = new FormData(e.target);
    console.log(data.entries());
    axios.post('/manufacturer', data)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log('kazkokia klaida',error);
      })
      .finally(() => { 
        setManufacturer(data.get('name'));  // !!!jeigu nesigavo sukurti geriau rodyti klaida.
        setShowManufacturers(false);
        setLoader(false);
       });
  }

  return(
    <form onSubmit={handleSubmit}>
      <h4 >Sukurti naują gamintoją</h4>
        <div className="inputField supplier-modal-form">
          <label>Name</label>
          <input type="text" name="name" required />
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
        <div className="inputField supplier-modal-form">
          <label>Description</label>
          <textarea name="description"></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
  )
}

export default ManufacturerNewForm;