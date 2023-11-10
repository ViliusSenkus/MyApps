import axios from '../../functionall/defaultURL';
import { useContext, useEffect, useState } from 'react';
import MainContext from "../../MainContext";
import Loader from '../../components/generalComponents/Loader';
import { Link } from "react-router-dom";
import NewImg from '../../img/icons/plus.png';
import SearchImg from '../../img/icons/search.png';
function Supplier() {

  const { loader, setLoader } = useContext(MainContext);

  const [items, setItems] = useState([]);

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

  // FUNKCIJOS KOPIJUOTOS IŠ LENTELIŲ REIKIA PERRAŠYTI !!!!!!!!!!!

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
  console.log(process.env.DB_URL)
  return (
    <>
      {loader && <Loader />}
      {/* PAIEŠKOS LAUKELIS */}
      <div className='container menu'>
        <label>
          <img src={SearchImg} alt='search' />
        </label>
        <input type='text' name='search' />
      </div>

      {/* SĄRAŠAS (iki 5 vienetų + '+') */}
      <div className="container menu">
        <ul >
        {items && items.map(item =>
            <li key={items.id}>
              {item.name}
              <br />
              <img src={item.logo} alt={item.name} />
            </li>          
        )
        }
          <li>
            Naujas
            <br />
            <img src={NewImg} alt='add new supplier' />
          </li>
        </ul>
      </div>

      {/* NAUJO ĮRAŠO VIETA */}
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










