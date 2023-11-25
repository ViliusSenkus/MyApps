import { useState } from 'react';
import Menu from '../components/dataPage/menu/Menu';
import { Outlet } from 'react-router-dom';
import DataContext from '../context/DataContext';
import Messege from '../components/dataPage/Messege';

function DataPages() {

  const [messege, setMessege] = useState("");
  const [showMessege, setShowMessege] = useState(false);

  const contextValues = {
    messege, setMessege, showMessege, setShowMessege
  }

  return (
    <>
      <div className='full-row'>
        <h4>Duomenys</h4>
      </div>

      <div>
        <DataContext.Provider value={contextValues}>
          <Menu />
          {showMessege && <Messege />}
          <Outlet />
        </DataContext.Provider>
      </div>
    </>
  )
}

export default DataPages;