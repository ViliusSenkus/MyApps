import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import Loading from '../loading/Loading';
import Alert from '../alert/Alert';
import MainContext from '../../context/MainContext';

function Header(){

      const {loading, setLoading, alert, setAlert, setData} =useContext(MainContext);

      const handleSearch = (e) =>{
            setLoading(true);
            const search=e.target.value;
            if(e.target.value===""){
                  axios.get('http://localhost:8000/api/products/')
                  .then((resp)=>setData(resp.data))
                  .catch((err)=>setAlert({m:err.response, s:"danger"}))
                  .finally(setLoading(false));
                  return;
            }
            axios.get('http://localhost:8000/api/products/search/'+ search)
                  .then((resp)=>setData(resp.data))
                  .catch((err)=>setAlert({m:err.response, s:"danger"}))
                  .finally(setLoading(false));
      }
      return(
            <>
            {loading && <Loading />}
            <header>
                  <div className="text-bg-dark py-3 px-5">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                              <h4 className="px-2 pe-5 text-white">E-Shop'as</h4>
                        </Link>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                              <li><Link to="/" className="nav-link px-2 text-white">Pagrindinis</Link></li>
                              <li><Link to="/admin" className="nav-link px-2 text-white">Administruoti</Link></li>
                        </ul>

                        <form className="col-12 col-lg-5 mb-3 mb-lg-0 me-lg-3" role="search">
                              <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" onKeyUp={handleSearch} />
                        </form>

                        <div className="text-end">
                              <button type="button" className="btn btn-secondary me-2">Login</button>
                              <button type="button" className="btn btn-outline-secondary">Sign-up</button>
                        </div>
                        </div>
                  </div>
            </header>
            </>
      )
}

export default Header;