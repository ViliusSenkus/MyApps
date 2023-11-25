import axios from '../../functionall/defaultURL';
import { useContext, useEffect, useState } from 'react';
import MainContext from '../../functionall/MainContext';
import DataContext from '../../context/DataContext';
import Loader from '../generalComponents/Loader';
import { Link } from 'react-router-dom';

function Supplier() {

  const { loader, setLoader } = useContext(MainContext);
  const {setMessege, showMessege, setShowMessege} = useContext(DataContext);

  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    setLoader(true);
    axios.get('/supplier')
      .then(resp => setItems(resp.data))
      .catch(error => setMessege('klaida sukeliant supplier sąrašą', error))
      .finally(() => {
        setLoader(false);
      }
      )
  }, [refresh])

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoader(true);
    // here data validation should go. At least one first positioin should be filled.

    const data = new FormData(e.target);

    axios.post('/supplier', data)
      .then(resp => {
       setMessege(resp.data);
      })
      .catch(error => {
       setMessege(error);
      })
      .finally(() => { 
        setRefresh(!refresh);
        setLoader(false) });
  }

  
  const handleEdit = (id) => {
    setMessege('bandymas redaguoti elementą');
  }
  const handleDelete = (id) => {
    setLoader(true);
    axios.delete(`/supplier/${id}`)
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
          <td>Name</td>
          <td>Logo</td>
          <td>WebAddress</td>
          <td>Actions</td>
        </thead>
        <tbody>
          {items && items.map(item =>
            <tr key={item.id} contenteditable="true">
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <img src={item.logo} alt={item.name} />
              </td>
              <td>
                <Link to={item.link}>
                  Web puslpapis
                </Link>
              </td>
              <td>
                <button className='edit-button' onClick={()=>handleEdit(item.id)}>Edit</button>
                <button className='delete-button' onClick={() => handleDelete(item.id)}>Delete</button>
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
          <label>Link to logo</label>
          <input type="text" name="logo" />
        </div>
        <div className="inputField">
          <label>Link to supplier web page</label>
          <input type="text" name="link" />
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default Supplier;