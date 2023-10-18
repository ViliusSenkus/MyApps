import { useContext, useEffect, useState } from "react";
import MainContext from "../MainContext";
import axios from "axios";

function Back_request() {
  
  const {loader, setLoader, purchaseData, setPurchaseData} = useContext(MainContext);

  const [one, setOne] = useState()

  const getPurchases = () => {
    setLoader(true);
    axios.get('http://localhost:8000/api/purchases')
    .then(resp => {setPurchaseData(resp.data)})
    .finally(() => setLoader(false));
  }
  
  const getItems = () => {
    setLoader(true);
    axios.get('http://localhost:8000/api/purchases/13')
    .then(resp => {
      if (Array.isArray(resp.data)){
        setPurchaseData(resp.data);
        setOne(false)
      } else {
        setOne(resp.data)
        setPurchaseData(false)
      }
    })
    .finally(() => setLoader(false));
  }

  return (
    <>
      <nav>
        <button onClick={getPurchases}>Get purchases</button>
        <button onClick={getItems}>Get purchases with ID 13</button>
      </nav>
      <div>
        {one && 
        <div>
          <td>{one.id}</td>
          <td>{one.purchase_date}</td>
          <td>{one.payment_method}</td>
        </div>}
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
              <button>Delete</button>
            </td>
            
          </tr>
          
        )}
      </div>
    </>
  )
}

export default Back_request;