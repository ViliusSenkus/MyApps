import { useContext } from "react";
import axios from "../../../../../functionall/defaultURL";
import MainContext from "../../../../../functionall/MainContext";
import BrandContext from "./BrandContext";

function BrandNewForm(){

  const {setLoader} = useContext(MainContext);
  const {setBrand, setShowBrand, setShowNewBrandForm} = useContext(BrandContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const data = new FormData(e.target)
    console.log(data.entries());
    axios.post('/brand', data)
    .then(resp => setBrand(resp.data.name))
    .catch(error => console.log('klaida kuriant brand ', error))
    .finally(
      setShowBrand(false),
      setShowNewBrandForm(false),
      setLoader(false)
    )
  }

  return(
    <form onSubmit={handleSubmit}>
      <h4 >Sukurti naują produktų seriją (brand'ą) </h4>
        <div className="inputField supplier-modal-form">
          <label>Name</label>
          <input type="text" name="name" required />
        </div>
        <div>
          {/* @ia turi b8ti manufacturer_id */}
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

export default BrandNewForm;