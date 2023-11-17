import BrandNewForm from './BrandNewForm';
import { useContext, useEffect, useState } from 'react';
import MainContext from '../../../../../functionall/MainContext';
import BrandContext from './BrandContext';
import axios from '../../../../../functionall/defaultURL';

function BrandModal() {
  const { loader, setLoader } = useContext(MainContext);
  const [items, setItems] = useState([]);
  const [brand, setBrand] = useState("");
  const [showBrand, setShowBrand] = useState(false);
  const [showNewBrandForm, setShowNewBrandForm] = useState(false);

  const contexValues = {
    setBrand,
    setShowBrand,
    setShowNewBrandForm
  }

  const spreadBrand = () => {
    setShowBrand(!showBrand);
    setShowNewBrandForm(false);
      setLoader(true);
      axios.get('/brand/last')
        .then(resp => setItems(resp.data))
        .catch(error => console.log('klaida renkant paskutiniu brandu info', error))
        .finally(setLoader(false));
  }

  const autoSearch = () => {
    // funkcija pasileidžia kiekvieną kartą įvedus/ištrynus simbolį įvedant-ištrinant greitai gali kilti klaida, kadangi praėjus 300ms, value gali būti === ""
    let value = document.getElementById('brandSearchModal').value.trim();
    if (value === "") {
      setTimeout(() => {
        setLoader(true);
        axios.get('/brand/last') // REIKALINGAS ROUTAS BACKE!!!!!!!!!!!!!!!
          .then(resp => setItems(resp.data))
          .catch(error => console.log('klaida sukeliant brand sąrašą', error))
          .finally(setLoader(false))
      }, 1000)
    } else {
      setTimeout(handleSearch, 300);
    }
  }

  const handleSearch = () => {
    setLoader(true);
    let value = document.getElementById('brandSearchModal').value.trim()
    axios.get('brand/search/' + value)  // REIKALINGAS ROUTAS BACKE!!!!!!!!!!!!!!!
      .then(resp => setItems(resp.data))
      .catch(error => console.log('klaida ieškant brandu', error))
      .finally(() => {
        setLoader(false);
      });
  }

  const showForm = () => {
    setShowNewBrandForm(true);
  }

  return (
    <BrandContext.Provider value={contexValues}>
      <div>
        <img src="/img/icons/arrow.png" alt="spread or collect manufacturer selection options"
          className={showBrand ? 'spread-box arrow-up' : 'spread-box'} onClick={spreadBrand} />
        Gaminių serijos pavadinimas / brandas: {brand}
      </div>
      {showBrand &&
        <>
          <div>
            <label className="search" >
              <img className="controll" src="/img/icons/search.png" alt='search' onClick={() => handleSearch()} />
            </label>
            <input id="brandSearchModal"
              type='text' name='search' onChange={() => { autoSearch() }} />
          </div>
          <div>
            <ul className="modal_ul">
              {items && items.map(item =>
                <li key={item.id} onClick={setBrand(item.name)}>
                  <img src={item.logo} alt={item.name} />
                  <br />
                  {item.name}
                </li>
              )
              }
              <li>

                <img className="modal-add" src="/img/icons/plus.png" alt='add new supplier' onClick={showForm} />
                <br />
                Naujas
              </li>
            </ul>
          </div>
        </>
      }
      {showNewBrandForm && <BrandNewForm />}
    </ BrandContext.Provider>
  )
}


export default BrandModal;
