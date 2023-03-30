import Loading from "../../components/loading/Loading";
import axios from "axios";
import Alert from "../../components/alert/Alert";
import { useContext,} from "react";
import { Link } from "react-router-dom";
import MainContext from "../../context/MainContext";

function NewCategory(){

      const {alert, setAlert, loading, setLoading} = useContext(MainContext);

      const handleCreate = (e) => {
            e.preventDefault();
            setLoading(true);

            const data=new FormData(e.target);

            axios.post('http://localhost:8000/api/categories', data)
            .then (resp => setAlert ({m:resp.data, s:"success"}))
            .catch((error)=>setAlert({m:error.response, s:"danger"}))
            .finally(()=>setLoading(false));
          }

      return(
            <>
            {loading && <Loading />}
            <h1 className="py-2">New cagtegory</h1>
            {alert && <Alert alert={alert} />}
            <form onSubmit={handleCreate}>
                  <label className="form-label">
                        Name:
                  </label>
                  <input className="form-control" type="text" name="name" required />

                  <div className="mt-3 d-flex flex-row justify-content-between">
                        <Link to="/admin" className="btn btn-secondary " >
                              Return
                        </Link>

                        <input type="reset" className="btn btn-danger" />
                        <button className="btn btn-success">Save</button>
                  </div>
            </form>
            </>
      )
}

export default NewCategory;