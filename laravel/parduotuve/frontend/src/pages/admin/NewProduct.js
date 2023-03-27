import Loading from "../../components/loading/Loader";
import axios from "axios";
import Alert from "../../components/alert/Alert";
import { useState } from "react";
import { json, Link } from "react-router-dom";

function NewProduct(){

      const [alert, setAlert] =  useState(false);
      
      const handleCrete = (e) => {
            e.preventDefault();
            
            const data=new FormData(e.target);

            axios.post('http://localhost:8000/api/products', data)
            .then (resp =>console.log(resp))
            .catch((error)=>console.log(error.response));
            // .then (resp => setAlert (resp));
          }


            axios.get('http://localhost:8000/api/products')
                  .then((res)=>console.log(res));
                  
         
            // axios.get('https://api.lorem.space/image/shoes?w=600&h=900', {mode: 'no-cors', headers:{header:'http://localhost'}})
            //       .then((res)=>console.log(res));

            // fetch('https://api.lorem.space/image/shoes?w=600&h=900', {mode: 'cors'})
            //       .then(resp => resp.json())
            //       .then(resp => console.log(resp));

      return(
            <>
            {/* {loading && <Loading />} */}

            <h1 className="py-2">Administravimo erdvė - Naujo Produkto pridėjimas</h1>
                 
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