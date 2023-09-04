import axios from 'axios';
import './PurchaseNew.css';

function PurchaseNew() {

  const handleSubmit = (e) => {
    e.preventDefault();

    // here data validation should go. At least three first positioins should be filled.

    const data = new FormData(e.target);
    
    if(data.get('finished') === 'on'){
      data.set('finished', 1);
    } else {
      data.set('finished', 0);
    }

    console.log(data.get('finished'));


    axios.post('http://localhost:8000/api/purchases', data)
    .then(resp => {
    console.log(resp.data);
    })
    // .catch(error => {
    // console.log(error.resp.data);
    // })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputField">
        <label>Date of purchase</label>
        <input type="date" name="purchase_date" />
      </div>
      <div className="inputField">
        <label>Place of purchase, Shop</label>
        <input type="text" name="purchase_place" /> {/* chane to select */}
      </div>
      <div className="inputField">
        <label>Payment method</label>
        <input type="text" name="payment_method" /> {/* chane to select */}
      </div>
      <div className="documentsGroup">
        Documents:
        <div className="inputField">
          <label>Initial offer</label>
          <input type="text" name="offer_doc" />
        </div>
        <div className="inputField">
          <label>Purchase</label>
          <input type="text" name="purchase_doc" />
        </div>
        <div className="inputField">
          <label>Initial prepayment</label>
          <input type="text" name="prepay_doc" />
        </div>
        <div className="inputField">
          <label>Final payment</label>
          <input type="text" name="final_payment_doc" />
        </div>
        <div className="inputField">
          <label>Invoice</label>
          <input type="text" name="invoice" />
        </div>
        <div className="inputField">
          <label>Other documents</label>
          <input type="text" name="other_docs" />
        </div>
      </div>
      <div className="inputField">
        <label>comments</label>
        <textarea name="coments" />
      </div>
      <div className="inputField">
        <label>Finished</label>
        <input type="checkbox" name="finished" /> 
      </div>
      <button type="submit">Save</button>
    </form>
  )
}

export default PurchaseNew;