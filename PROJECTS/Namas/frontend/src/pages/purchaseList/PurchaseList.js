import { useContext, useEffect } from 'react';
import './PurchaseList.css';
import axios from 'axios';

import MainContext from '../../MainContext.js';
import Loader from '../../components/generalComponents/Loader';

function PurchaseList() {

  const { purchaseData, setPurchaseData, loader, setLoader } = useContext(MainContext);

  useEffect(()=>{
    setLoader(true);

    axios.get('http://localhost:8000/api/purchase')
    .then(resp => {setPurchaseData(resp.data)})
    .finally(() => setLoader(false));
  }, [])

  const handleDelete = (id) => {
    setLoader(true);
    axios.delete(`http://localhost:8000/api/purchase/${id}`)
      .then(resp => console.log(resp.data))
      .catch(error => { console.log('Klaida', error) })
      .finally(setLoader(false))
  }

  return (
    <>
    {loader ?? <Loader />}
      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>Purchase Date</td>
            <td>Purchase Place</td>
            <td>Payed By</td>
            <td>Offer document</td>
            <td>Purchasement document</td>
            <td>Prepayment document</td>
            <td>Final payment document</td>
            <td>invoice</td>
            <td>Other documents</td>
            <td>Comments</td>
            <td>Purchase finished</td>
            <td>Options</td>
          </tr>
        </thead>
        <tbody>
          {purchaseData && purchaseData.map(item =>
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.purchase_date}</td>
              <td>{item.purchase_place}</td>
              <td>{item.payment_method}</td>
              <td>{item.offer_doc}</td>
              <td>{item.purchase_doc}</td>
              <td>{item.prepay_doc}</td>
              <td>{item.final_payment_doc}</td>
              <td>{item.invoice}</td>
              <td>{item.other_docs}</td>
              <td>{item.coments}</td>
              <td>{item.finished}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>

            </tr>

          )}
        </tbody>
      </table>
    </>
  )
}

export default PurchaseList;