import Supplier from './Supplier';
import { useContext, useState } from 'react';
import MainContext from '../../../../functionall/MainContext';
import "../../../../styles/modal.css";
import EntrieContext from '../../EntrieContext';

function SupplierPart() {

  const {showHideSuppliers, setShowHideSuppliers} = useContext(EntrieContext);

  const { newSupplier } = useContext(MainContext);

  const spreadSuppliers = () => {
    setShowHideSuppliers(!showHideSuppliers);
  }

  return (
    <>
      <div className='two-col-grid'>
        <label className="entrie-form-label">
          Tiekėjas:
        </label>
        <div>
          <input type="text" className="entrie-form-input" name="order_discount" value={newSupplier} onChange={() => { }} readOnly />
          {showHideSuppliers ?  
            <img src="/img/icons/arrow.png" alt="spread or close selectables" onClick={spreadSuppliers} className='spread-box arrow-up' />
            :
            <img src="/img/icons/arrow.png" alt="spread or close selectables" onClick={spreadSuppliers} className='spread-box arrow-down' />
          }
        </div>
      </div>
      <div>

      </div>

    </>
  );
}

export default SupplierPart;