import {useState} from 'react';

import OrderDocuments from "./OrderDocuments";

function OrderPart2() {

  const [showHideOrderDocuments, setshowHideOrderDocuments] = useState(true);
  
  const spreadOrderDocuments = () => {
    setshowHideOrderDocuments(!showHideOrderDocuments);
  }

  return (
    <>
        <label className="entrie-form-label">Nuolaida procentais visam pirkimui:</label>
        <input type="number" className="entrie-form-input" name="order_discount" />
        <label className="entrie-form-label full-grid-row">
          {showHideOrderDocuments ?
            <img src="/img/icons/arrow.png" alt="spread or close selectables" onClick={spreadOrderDocuments} className='spread-box arrow-down' />
            :
            <img src="/img/icons/arrow.png" alt="spread or close selectables" onClick={spreadOrderDocuments} className='spread-box arrow-up' />
          }
          Finansiniai dokumentai:
        </label>
      <div className='full-grid-row'>
        {!showHideOrderDocuments && <OrderDocuments />}
      </div>
    </>
  )
}

export default OrderPart2;