import Loading from "../../components/loading/Loader";
import axios from "axios";
import Alert from "../../components/alert/Alert";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NewProduct(){

      const [alert, setAlert] =  useState(false);
      const [loading, setLoading] = useState(false);

      useEffect(()=>{

      })

      const handleCrete = (e) => {
            e.preventDefault();
            setLoading(true);

            const data=new FormData(e.target);

            axios.post('http://localhost:8000/api/products', data)
            .then (resp => setAlert (resp.data))
            .catch((error)=>setAlert(error.response))
            .finally(()=>setLoading(false));
          }

      return(
            <>
            {loading && <Loading />}
            <h1 className="py-2">Administravimo erdvė - Naujo Produkto pridėjimas</h1>
            {alert && <Alert alert={alert} />}
            <form onSubmit={handleCrete}>
                  <label className="form-label">
                        Name:
                  </label>
                  <input className="form-control" type="text" name="name" required />

                  <label className="form-label">
                        Description:
                  </label>
                  <textarea className="form-control" name="description" required>
                  </textarea>

                  <label className="form-label">
                        SKU:
                  </label>
                  <input className="form-control" type="text" name="sku" required />
                  
                  <label className="form-label">
                        Price:
                  </label>
                  <input className="form-control" type="number" step="0.01" name="price" required />

                  <label className="form-label">
                        Quantity in warehouse
                  </label>
                  <input className="form-control" type="number" step="1" name="warehouse_qnt" required />

                  <label className="form-label">
                        Picture
                  </label>
                  <input className="form-control" type="file" name="photo" />
                  
                  <label className="form-label">
                        Or Picture Link
                  </label>
                  <input className="form-control" type="text" name="photo" />

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

export default NewProduct;