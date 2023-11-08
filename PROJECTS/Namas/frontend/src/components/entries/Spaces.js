import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import MainContext from '../../MainContext';
import Loader from '../generalComponents/Loader';

function Spaces() {

  const { loader, setLoader } = useContext(MainContext);

  const [items, setItems] = useState([])

  useEffect(() => {
    setLoader(true);
    axios.get('http://localhost:8000/api/space')
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

    axios.post('http://localhost:8000/api/space', data)
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
          <td>Description</td>
          <td>Actions</td>
        </thead>
        <tbody>
          {items && items.map(item =>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
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
          <label>Description</label>
          <input type="text" name="description" />
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default Spaces;