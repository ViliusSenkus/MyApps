import Menu from '../../components/dataPage/menu/Menu';
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