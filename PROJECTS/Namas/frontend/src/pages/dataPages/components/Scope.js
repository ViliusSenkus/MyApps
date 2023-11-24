import axios from '../../../functionall/defaultURL';
import { useContext, useEffect, useState } from 'react';
import MainContext from '../../../functionall/MainContext';
import DataContext from '../context/DataContext';
import Loader from '../../../components/generalComponents/Loader';

function Scope() {

  const { loader, setLoader } = useContext(MainContext);
  const {setMessege, showMessege, setShowMessege} = useContext(DataContext);

  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    setLoader(true);
    axios.get('/scope')
      .then(resp => setItems(resp.data))
      .catch(error => setMessege('klaida sukeliant scope sąrašą', error))
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

    axios.post('/scope', data)
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
    axios.delete(`/scope/${id}`)
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
          <td>Description</td>
          <td>Actions</td>
        </thead>
        <tbody>
          {items && items.map(item =>
            <tr key={item.id} contenteditable="true">
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
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
          <label>Description</label>
          <input type="text" name="description" />
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default Scope;