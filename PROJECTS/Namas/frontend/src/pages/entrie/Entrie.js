import Menu from '../dataPages/components/menu/Menu';
import Supplier from './components/supplierData/Supplier';
import { useContext, useState } from 'react';
import MainContext from '../../functionall/MainContext';
import { Outlet } from 'react-router-dom';
import OrderDocuments from './components/orderData/OrderDocuments';
import ProductNew from './components/ProductNew';
import PurchaseNew from './components/PurchaseNew';
import OrderPart1 from './components/orderData/OrderPart1';
import OrderPart2 from './components/orderData/OrderPart2';
import SupplierPart from './components/supplierData/SupplierPart';
import Purchasetable from './components/PurchaseTable';
import EntrieContext from './EntrieContext';


function Entrie() {


  const [purchase, setPurchase] = useState([]);
  const [productForm, setProductForm] = useState(false);
  const [serviceForm, setServiceForm] = useState(false);
  const [showHideSuppliers, setShowHideSuppliers] = useState(false);

  const contextValues = {
    showHideSuppliers,
    setShowHideSuppliers
  };

  const handleAddProduct = () => {
    setProductForm(true);
    setServiceForm(false);
  }
  const handleAddService = () => {
    setProductForm(false);
    setServiceForm(true);
  }

  return (
    <EntrieContext.Provider value={contextValues}>
      <h4>Naujas pirkimas</h4>
      <form className='two-col-grid'>
        <OrderPart1 />
        <SupplierPart />
        <div onClick={handleAddProduct}>
          <img className='controll' src="/img/icons/plus.png" alt="pridėti paslaugą" />
          Pridėti produktą
        </div>
        <div onClick={handleAddService}>
          <img className='controll' src="/img/icons/plus.png" alt="pridėti paslaugą" />
          Pridėti paslaugą
        </div>




        {/* pirkimo produktų ir paslaugų sąrašas */}
        <table className='full-grid-row'>
          <thead>
            <tr>
              <th>#</th>
              <th>Prekės/paslaugos pavadinimas</th> {/*service name */}
              <th>Gamintojas</th> {/*service type*/}
              <th>Modelis</th>    {/*service type*/}
              <th>Aprašymas</th>  {/*service description*/}
              <th>Foto</th>       {/*service picture*/}
              <th>Pakuotės tipas</th>
              <th>matavimo vienetai 1</th>  {/*service accounting unit 1 */}
              <th>matavimo vienetai 2</th>  {/*service accounting unit 2 */}
              <th>Kiekis 1</th>
              <th>Kiekis 2</th>
              <th>Standartinė kaina</th>
              <th>Sumokėta kaina</th>
              <th>Dokumentai</th>
            </tr>
            {/* 
            Nuoalidos kortelė
            Nuoroda į produktą
            Aprašymas --- kažkur nereikalingas arba prie produkto arba prie purchase.
             */}
          </thead>
          <tbody>
            {purchase && <Purchasetable purchase={purchase} />}
          </tbody>
        </table>
        <OrderPart2 />
      </form >

      <div className='full-grid-row'>
        {showHideSuppliers && <Supplier />}
      </div>

      {/* šiti turi būti modaliniame arba šoniniame lange */}
      {productForm &&
        <div>
          <ProductNew />
        </div>
      }
      {serviceForm &&
        <div>
          <PurchaseNew />
        </div>
      }


</EntrieContext.Provider >
  )
}

export default Entrie;