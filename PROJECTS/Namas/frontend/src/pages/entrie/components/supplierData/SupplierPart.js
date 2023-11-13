import Supplier from './Supplier';
import { useContext, useState } from 'react';
import MainContext from '../../../../functionall/MainContext';

function SupplierPart() {

  const [showHideSuppliers, setShowHideSuppliers] = useState(true);

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
            <img src="/img/icons/arrow.png" alt="spread or close selectables" onClick={spreadSuppliers} className='spread-box arrow-down' />
            :
            <img src="/img/icons/arrow.png" alt="spread or close selectables" onClick={spreadSuppliers} className='spread-box arrow-up' />
          }
        </div>
      </div>
      <div>

      </div>
      <div className='full-grid-row'>
        {!showHideSuppliers && <Supplier />}
      </div>
    </>
  );
}

export default SupplierPart;