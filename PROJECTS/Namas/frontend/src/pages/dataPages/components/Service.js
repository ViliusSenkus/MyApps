import axios from '../../../functionall/defaultURL';
import { useContext, useEffect, useState } from 'react';
import MainContext from '../../../functionall/MainContext';
import DataContext from '../context/DataContext';
import Loader from '../../../components/generalComponents/Loader';
import { Link } from 'react-router-dom';

function Service() {

  const { loader, setLoader } = useContext(MainContext);
  const { setMessege, showMessege, setShowMessege } = useContext(DataContext);

  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    setLoader(true);
    axios.get('/service')
      .then(resp => setItems(resp.data))
      .catch(error => setMessege('klaida sukeliant service sąrašą', error))
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

    axios.post('/service', data)
      .then(resp => {
        setMessege(resp.data);
        setShowMessege(!showMessege);
      })
      .catch(error => {
        setMessege(error);
        setShowMessege(!showMessege);
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
    axios.delete(`/service/${id}`)
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
            <td>Type</td>
            <td>Picture</td>
            <td>Name</td>
            <td>Link</td>
            <td>Description</td>
            <td>Accounting unit (1)</td>
            <td>Accounting unit (2)</td>
          </thead>
          <tbody>
            {items && items.map(item =>
              <tr key={item.id} contenteditable="true">
                <td>{item.id}</td>
                <td>{item.type}</td>
                <td>
                  <img src={item.picture} alt={item.name} />
                </td>
                <td>{item.name}</td>
                <td>
                  <Link to={item.link}>
                    Web puslpapis
                  </Link>
                </td>
                <td>{item.description}</td>
                <td>{item.accounting_unit1}</td>
                <td>{item.accounting_unit2}</td>
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
        <div className="inputField">
          <label>Type</label>
          <select name="name">
            <option value="car rent">Car rent</option>
            <option value="instrument rent">Instrument rent</option>
            <option value="transportation">Transportation</option>
            <option value="job">Job</option>
          </select>
        </div>
        <div className="inputField">
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div className="inputField">
          <label>Picture</label>
          <input type="text" name="picture" />
        </div>
        <div className="inputField">
          <label>Link to service web page</label>
          <input type="text" name="link" />
        </div>
        <div className="inputField">
          <label>Description</label>
          <textarea name="description"></textarea>
        </div>
        <div className="inputField">
          <label>Accounting unit 1</label>
          <input type="text" name="accounting_unit1" />
        </div>
        <div className="inputField">
          <label>Accounting unit 2</label>
          <input type="text" name="accounting_unit2" />
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default Service;