import {useState} from 'react';

import OrderDocuments from "./OrderDocuments";

function OrderPart() {

  const [showHideOrderDocuments, setshowHideOrderDocuments] = useState(true);
  
  const spreadOrderDocuments = () => {
    setshowHideOrderDocuments(!showHideOrderDocuments);
  }

  return (
    <>
      <div>
        <label className="entrie-form-label">Data:</label>
        <input type="date" name="order_date" />
      </div>
      <div>
        <label className="entrie-form-label">Mokėjimo būdas:</label>
        <select className="entrie-form-input" name="order_payment_method">
          <option value="cash">Cash</option>
          <option value="card">Card</option>
          <option value="bank transfer">Bank transfer</option>
          <option value="cash">mixed</option>
        </select>
      </div>
      <div>
        <label className="entrie-form-label">Nuolaida procentais visam pirkimui:</label>
        <input type="number" className="entrie-form-input" name="order_discount" />
      </div>
      
      <div>
        <label className="entrie-form-label">
          {showHideOrderDocuments ?
            <img src="/img/icons/arrow.png" alt="spread or close selectables" onClick={spreadOrderDocuments} className='spread-box arrow-down' />
            :
            <img src="/img/icons/arrow.png" alt="spread or close selectables" onClick={spreadOrderDocuments} className='spread-box arrow-up' />
          }
          Finansiniai dokumentai:
        </label>
      </div>

      <div>
        {!showHideOrderDocuments && <OrderDocuments />}
      </div>
    </>
  )
}

export default OrderPart