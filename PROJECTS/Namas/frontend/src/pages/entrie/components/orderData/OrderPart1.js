import { useState } from 'react';

function OrderPart1() {

  return (
    <>
      <div className='two-col-grid'>
        <label className="entrie-form-label">Data:</label>
        <input type="date" name="order_date" />
        <label className="entrie-form-label">Mokėjimo būdas:</label>
        <select className="entrie-form-input" name="order_payment_method">
          <option value="cash">Cash</option>
          <option value="card">Card</option>
          <option value="bank transfer">Bank transfer</option>
          <option value="cash">mixed</option>
        </select>
      </div>
      <div>
        {/* intentionally emty */}
      </div>
    </>
  )
}

export default OrderPart1