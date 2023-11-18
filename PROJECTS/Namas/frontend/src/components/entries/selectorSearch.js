import {useContext} from 'react';
import MainContext from "../../functionall/MainContext";
import SelectorContext from '../../context/SelectorContext';

import axios from '../../functionall/defaultURL';

function SelectorSearch(props) {

  const {setLoader} = useContext(MainContext);
  const {setItems} = useContext(SelectorContext);

  const searchId = props.name+'Search';

  const autoSearch = () => {
    // funkcija pasileidžia kiekvieną kartą įvedus/ištrynus simbolį įvedant-ištrinant greitai gali kilti klaida, kadangi praėjus 300ms, value gali būti === ""
    let value = document.getElementById(searchId).value.trim();
    if (value === ""){
      setTimeout(()=>{
        setLoader(true);
        axios.get('/' + props.name + '/last')
        .then(resp => setItems(resp.data))
        .catch(error => console.log('klaida sukeliant ' + props.name + 'sąrašą', error))
        .finally(
          setLoader(false))
      }, 1000)
    }else{
      setTimeout (handleSearch, 300); 
    }
  }
      
  const handleSearch = () => {
    setLoader(true);
    let value = document.getElementById(searchId).value.trim()
    axios.get('/' + props.name + '/search/' + value)
      .then(resp => setItems(resp.data))
      .catch(error => console.log('klaida ieškant ' + props.name, error))
      .finally(() => {
        setLoader(false);
      });
  }

  return (
    <div>
      <label className="search" >
        <img className="controll" src="/img/icons/search.png" alt='search' onClick={ handleSearch} />
      </label>
      <input id={searchId} type='text' name='search' onChange={autoSearch} />
    </div>
  )
}

export default SelectorSearch;