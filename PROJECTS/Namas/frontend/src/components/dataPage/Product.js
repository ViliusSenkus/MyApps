import axios from '../../functionall/defaultURL';
import { useContext, useEffect, useState } from 'react';
import MainContext from '../../functionall/MainContext';
import DataContext from '../../context/DataContext';
import Loader from '../generalComponents/Loader';

function Product() {

  const { loader, setLoader } = useContext(MainContext);
  const { setMessege, showMessege, setShowMessege } = useContext(DataContext);

  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    setLoader(true);
    axios.get('/product')
      .then(resp => setItems(resp.data))
      .catch(error => setMessege('klaida sukeliant product sąrašą', error))
      .finally(() => {
        axios.get('/brand')
          .then(resp => setBrands(resp.data))
          .catch(error => setBrands([]))
          .finally(setLoader(false));
      }
      )

  }, [refresh])

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoader(true);
    // here data validation should go. At least one first positioin should be filled.

    const data = new FormData(e.target);

    axios.post('/product', data)
      .then(resp => {
        setMessege(resp.data);
      })
      .catch(error => {
        setMessege(error);
      })
      .finally(() => {
        setRefresh(!refresh);
        setLoader(false)
      });
  }


  const handleEdit = (id) => {
    setMessege('bandymas redaguoti elementą');
  }

  const handleDelete = (id) => {
    setLoader(true);
    axios.delete(`/product/${id}`)
      .then(resp => {
        setMessege('ištrinta sėkmingai', resp.data);
        setShowMessege(!showMessege);
      })
      .catch(error => {
        setShowMessege('Klaida', error);
        setShowMessege(true);
      })
      .finally(() => {
        setRefresh(!refresh);
        setLoader(false);
      });
  }

  return (
    <>
      {loader && <Loader />}
      <div className="container" >
        <table>
          <thead>
            <td>#</td>
            <td>Brand ID</td>
            <td>Photo</td>
            <td>Name</td>
            <td>Package type</td>
            <td>Description</td>
            <td>Mat.vnt.</td>
            <td>Kiekis</td>
            <td>Alternatyvus mat.vnt.</td>
            <td>Kiekis</td>
            <td>Action</td>
          </thead>
          <tbody>
            {items && items.map(item =>
              <tr key={item.id} contenteditable="true">
                <td>{item.id}</td>
                <td>{item.brand_id}</td>
                <td>
                  <img src={item.picture} alt={item.name} />
                  <br />
                  {item.picture}
                </td>
                <td>{item.name}</td>
                <td>{item.package_type}</td>
                <td>{item.description}</td>
                <td>{item.measurement_units}</td>
                <td>{item.ammount_in_unit}</td>
                <td>{item.measurement_units2}</td>
                <td>{item.ammount_in_unit2}</td>
                <td>
                  <button className='edit-button' onClick={() => handleEdit(item.id)}>Edit</button>
                  <button className='delete-button' onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Brand</label>
        <select name="brand_id">
          {brands && brands.map(brand =>
            <option key={brand.id} value={brand.id}>{brand.name}</option>
          )
          }
        </select>
        <div className="inputField">
          <label>Official picture</label>
          <input type="text" name="picture" />
        </div>
        <div className="inputField">
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div className="inputField">
          <label>Package type</label>
          <input type="text" name="package_type" />
        </div>
        <div className="inputField">
          <label>Description</label>
          <input type="text" name="description" />
        </div>

        <div className="inputField">
          <label>Measurement unit</label>
          <input type="text" name="measurement_units" />
        </div>
        <div className="inputField">
          <label>Ammount</label>
          <input type="text" name="ammount_in_unit" />
        </div>
        <div className="inputField">
          <label>Alternative measurement unit</label>
          <input type="text" name="measurement_units2" />
        </div>
        <div className="inputField">
          <label>Ammount</label>
          <input type="text" name="ammount_in_unit2" />
        </div>

        <button type="submit">Save</button>
      </form>
    </>
  )
}


export default Product;