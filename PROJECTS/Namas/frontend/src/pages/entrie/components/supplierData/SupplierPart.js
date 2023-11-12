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
    <><div>
      <label className="entrie-form-label">
        {showHideSuppliers ?
          <img src="/img/icons/arrow.png" alt="spread or close selectables" onClick={spreadSuppliers} className='spread-box arrow-down' />
          :
          <img src="/img/icons/arrow.png" alt="spread or close selectables" onClick={spreadSuppliers} className='spread-box arrow-up' />
        }
        Tiekėjas:
      </label>
      <input type="text" className="entrie-form-input" name="order_discount" value={newSupplier} onChange={()=>{}} readOnly />
      <div>

      </div>
    </div>

      {!showHideSuppliers && <Supplier />}
    </>
  );
}

export default SupplierPart;