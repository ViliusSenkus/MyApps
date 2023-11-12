import axios from "../../../../functionall/defaultURL";
import { useContext } from "react";
import MainContext from "../../../../functionall/MainContext";

function SupplierForm() {

  const { setLoader } = useContext(MainContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    // here data validation should go. At least one first positioin should be filled.
    const data = new FormData(e.target);
    axios.post('/supplier', data)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => { setLoader(false) });
  }

  return(
    <>
    <form onSubmit={handleSubmit}>
      <h4>Naujas tiekėjas</h4>
        <div className="inputField">
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div className="inputField">
          <label>Link to supplier logo or photo</label>
          <input type="text" name="logo" />
          <label className="end-lable menu">
            <img src="/img/icons/add-file.png" alt="add file" />
          </label>
        </div>
        <div className="inputField">
          <label>Link to official page</label>
          <input type="link" name="link" />
        </div>
        <button type="submit">Save</button>
      </form>
      </>
  )
}

export default SupplierForm