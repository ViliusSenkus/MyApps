import axios from 'axios';

import { useContext } from 'react';
import MainContext from '../../../functionall/MainContext';

import Loader from '../../../components/generalComponents/Loader';

function ProductNew() {

  const { loader, setLoader } = useContext(MainContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // here data validation should go. At least three first positioins should be filled.

    const data = new FormData(e.target);

    setLoader(true)

    axios.post('http://localhost:8000/api/product', data)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => { setLoader(false) });
  }

  return (
    <>
      {loader && <Loader />}
      <form onSubmit={handleSubmit}>
        <div className="inputField">
          <label>Manufacturer</label>
          <input type="text" name="manufacturer" />
        </div>
        <div className="inputField">
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div className="inputField">
          <label>Description of product (generall for all same type products)</label>
          <input type="text" name="description" /> {/* chane to select */}
        </div>
        <div className="inputField">
          <label>Picture Link</label>
          <input type="link" name="photo" /> {/* chane to select */}
        </div>
        <div className="inputField">
          <label>Units of measurement (kg, m, buckets, etc.)</label>
          <input type="text" name="measurement_unit" /> {/* chane to select */}
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default ProductNew;