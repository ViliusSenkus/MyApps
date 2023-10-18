import {useContext } from 'react';
import './PurchaseList.css';

import MainContext from '../../../MainContext.js';

function PurchaseList() {

  const {purchaseData} = useContext(MainContext);

  return (
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
        { purchaseData && purchaseData.map(item =>
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
              <button>Delete</button>
            </td>
            
          </tr>
          
        ) }
      </tbody>
    </table>
  )
}

export default PurchaseList;