import axios from '../../../functionall/defaultURL';
import { useContext, useEffect, useState } from 'react';
import MainContext from '../../../functionall/MainContext';
import DataContext from '../context/DataContext';
import Loader from '../../../components/generalComponents/Loader';

function SubScope() {

  const { loader, setLoader } = useContext(MainContext);
  const {setMessege} = useContext(DataContext);

  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const [scopes, setScopes] = useState([]);

  useEffect(() => {
    setLoader(true);
    axios.get('/subscope')
      .then(resp => setItems(resp.data))
      .catch(error => setMessege('klaida sukeliant subscope sąrašą', error))
      .finally(() => {
        axios.get('/scope')
        .then(resp=>setScopes(resp.data))
        .catch(error=>setScopes([]))
        .finally(setLoader(false));
      }
      )
      
  }, [refresh])

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoader(true);
    // here data validation should go. At least one first positioin should be filled.

    const data = new FormData(e.target);

    axios.post('/subscope', data)
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
  const handleDelete = (e) => {
    e.preventDefault();
    setMessege('bandymas ištrinti elementą');
  }

  return (
    <>
      {loader && <Loader />}
      <div className="container" >
      <table>
        <thead>
          <td>#</td>
          <td>Scope</td>
          <td>Name</td>
          <td>Description</td>
          <td>Actions</td>
        </thead>
        <tbody>
          {items && items.map(item =>
            <tr key={item.id} contenteditable="true">
              <td>{item.id}</td>
              <td>{item.application_scope_id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <button className='edit-button' onClick={()=>handleEdit(item.id)}>Edit</button>
                <button className='delete-button' onClick={handleDelete}>Delete</button>
              </td>
            </tr>)
          }
        </tbody>
      </table>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Scope</label>
        <select name="application_scope_id">
          {scopes && scopes.map( scope =>
            <option key={scope.id} value={scope.id}>{scope.name}</option>
          )
          }
        </select>
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

export default SubScope;