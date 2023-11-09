import Menu from '../../components/header/menu/Menu';
import Supplier from '../../components/entries/Supplier';
import Spaces from '../../components/entries/Spaces';
import { Outlet } from 'react-router-dom';

function Entrie() {

      return(
            <div>
                  <Menu />
                  <Outlet />
            </div>
      )
}

export default Entrie;