import axios from '../../functionall/defaultURL';
import { useContext, useEffect, useState } from 'react';
import MainContext from '../../functionall/MainContext';
import DataContext from '../../context/DataContext';
import Loader from '../generalComponents/Loader';
import { Link } from 'react-router-dom';

function Brand() {

  const { loader, setLoader } = useContext(MainContext);
  const { setMessege, showMessege, setShowMessege } = useContext(DataContext);

  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const [manufacturers, setManufacturers] = useState([]);

  useEffect(() => {
    setLoader(true);
    axios.get('/brand')
      .then(resp => setItems(resp.data))
      .catch(error => setMessege('klaida sukeliant brand sąrašą', error))
      .finally(() => {
        axios.get('/manufacturer')
          .then(resp => setManufacturers(resp.data))
          .catch(error => setManufacturers([]))
          .finally(setLoader(false));
      }
      )

  }, [refresh])

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoader(true);
    // here data validation should go. At least one first positioin should be filled.

    const data = new FormData(e.target);

    axios.post('/brand', data)
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
    axios.delete(`/brand/${id}`)
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
            <td>Manufacturer</td>
            <td>Name</td>
            <td>Description</td>
            <td>Actions</td>
          </thead>
          <tbody>
            {items && items.map(item =>
              <tr key={item.id} contenteditable="true">
                <td>{item.id}</td>
                <td>{item.manufacturer_id}</td>
                <td>{item.description}</td>
                <td>
                  <img src={item.logo} alt={item.name} />
                  <br />
                  {item.logo}
                </td>
                <td>
                  <Link to={item.link} >{item.link}</Link></td>
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
        <label>Manufacturer</label>
        <select name="manufacturer_id">
          {manufacturers && manufacturers.map(manufacturer =>
            <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
          )
          }
        </select>
        <div className="inputField">
          <label>Brand Name</label>
          <input type="text" name="name" />
        </div>
        <div className="inputField">
          <label>Brand Logo</label>
          <input type="text" name="logo" />
        </div>
        <div className="inputField">
          <label>Brand official Web page</label>
          <input type="text" name="link" />
        </div>
        <div className="inputField">
          <label>Description</label>
          <input type="text" name="description" />
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default Brand;