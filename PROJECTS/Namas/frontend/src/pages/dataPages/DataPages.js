import Menu from './components/menu/Menu';
import { Outlet } from 'react-router-dom';

function DataPages() {

  return (
    <>
      <div className='full-row'>
        <h4>Duomenys</h4>
      </div>

      <div>
        <Menu />
        <Outlet />
      </div>
    </>
  )
}

export default DataPages;