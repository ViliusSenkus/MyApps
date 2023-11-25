import { useContext, useState } from 'react';
import EntrieContext from '../context/EntrieContext.js';
import SelectorMain from '../components/entries/SelectorMain.js';
import AddProduct from '../components/entries/AddProduct.js';
import AddService from '../components/entries/AddService.js';


function Entrie() {

  const [addProduct, setAddProduct] = useState(false);
  const [addService, setAddService] = useState(false);
  
  // Konteksto kintamieji kol kas niekur nenaudojami
 
  const contextValues = {
    setAddProduct,
    setAddService
  };

  const handleShowAddProduct = () => {
    setAddProduct(true);
    setAddService(false);
  }
  const handleShowAddService = () => {
    setAddProduct(false);
    setAddService(true);
  }

  return (
    <EntrieContext.Provider value={contextValues}>

      <h4>Įveskite naujo pirkimo duomenis</h4>

      <div className="inputField">
        <label className="entrie-form-label">Data:</label>
        <input type="date" name="purchasement_date" />
      </div>
      <SelectorMain name='supplier' />

      <div className='two-col-grid'>
        <div onClick={handleShowAddProduct}>
          <img className='controll clicable' src="/img/icons/plus.png" alt="pridėti paslaugą" />
          Pridėti prekę
        </div>
        <div onClick={handleShowAddService}>
          <img className='controll clicable' src="/img/icons/plus.png" alt="pridėti paslaugą" />
          Pridėti paslaugą
        </div>
      </div>

      {addProduct && <AddProduct /> }
      {addService && <AddService /> }

      <div>
        Čia turės bbūti pridėtų prekių ir paslaugų sąrašas
      </div>
      <form className='two-col-grid'>







      </form >
    </EntrieContext.Provider >
  )
}

export default Entrie;