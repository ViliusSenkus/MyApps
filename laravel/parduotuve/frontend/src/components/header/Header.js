import { Link } from 'react-router-dom';

function Header(){
      return(
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
                        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                        </form>

                        <div className="text-end">
                        <button type="button" className="btn btn-secondary me-2">Login</button>
                        <button type="button" className="btn btn-outline-secondary">Sign-up</button>
                        </div>
                        </div>
                  </div>
            </header>
      )
}

export default Header;