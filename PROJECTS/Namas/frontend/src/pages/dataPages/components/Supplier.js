import axios from '../../../functionall/defaultURL';
import { useContext, useEffect, useState } from 'react';
import MainContext from '../../../functionall/MainContext';
import Loader from '../../../components/generalComponents/Loader';

function Supplier() {

  const { loader, setLoader } = useContext(MainContext);

  const [items, setItems] = useState([])

  useEffect(() => {
    setLoader(true);
    axios.get('/supplier')
      .then(resp => setItems(resp.data))
      .catch(error => console.log('klaida sukeliant tiekėjų sąrašą', error))
      .finally(() => {
        setLoader(false)
      }
      )
  }, [])

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
  return (
    <>
      {loader && <Loader />}
      <div className="container">
        <table>
          <thead>
            <td>#</td>
            <td>Name</td>
            <td>Logo</td>
            <td>Link</td>
            <td>Actions</td>
          </thead>
          <tbody>
            {items && items.map(item =>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <img src={item.logo} alt={item.name} />
                  <br />
                  {item.logo}
                </td>
                <td>{item.link}</td>
                <td>
                  <button className='edit-button'>Edit</button>
                  <button className='delete-button'>Delete</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputField">
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div className="inputField">
          <label>Link to supplier logo or photo</label>
          <input type="text" name="logo" />
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

export default Supplier;