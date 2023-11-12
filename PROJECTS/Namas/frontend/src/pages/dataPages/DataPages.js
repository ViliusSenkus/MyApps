import Menu from './components/menu/Menu';
import { Outlet } from 'react-router-dom';

function DataPages() {

      return(
            <div>
                  <Menu />
                  <Outlet />
            </div>
      )
}

export default DataPages;