import Menu from '../dataPages/components/menu/Menu';
import Supplier from './components/supplierData/Supplier';
import { useContext, useState } from 'react';
import MainContext from '../../functionall/MainContext';
import { Outlet } from 'react-router-dom';
import OrderDocuments from './components/orderData/OrderDocuments';
import ProductNew from './components/ProductNew';
import PurchaseNew from './components/PurchaseNew';
import OrderPart from './components/orderData/OrderPart';
import SupplierPart from './components/supplierData/SupplierPart';
import Purchasetable from './components/PurchaseTable';


function Entrie() {


  const [purchase, setPurchase] = useState([]);
  const [productForm, setProductForm] = useState(false);
  const [serviceForm, setServiceForm] = useState(false);

  const handleAddProduct = () => {
    setProductForm(true);
    setServiceForm(false);
  }
  const handleAddService = () => {
    setProductForm(false);
    setServiceForm(true);
  }

  return (
    <div>
      <h4>New order</h4>
      <form>
        <OrderPart />
        <SupplierPart />

        {/* pirkimo produktų ir paslaugų sąrašas */}
        <table>
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
             {purchase && <Purchasetable purchase={purchase} /> }
            <tr>
              <td colSpan="100%">
                <img src="/img/icons/plus.png" alt="pridėti paslaugą" onClick={handleAddProduct} />
                Pridėti produktą
              </td>
            </tr>
            <tr>
              <td colSpan="100%">
                <img src="/img/icons/plus.png" alt="pridėti paslaugą" onClick={handleAddService} />
                Pridėti paslaugą
              </td>
            </tr>
          </tbody>
        </table>
      </form >

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
    </div>
  )
}

export default Entrie;