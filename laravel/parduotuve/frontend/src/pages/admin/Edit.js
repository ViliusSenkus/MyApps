import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams} from "react-router-dom";
// import Loading from '../../components/loading/Loader';
// import Alert from '../../components/alert/Alert';
// import Products from "./Products";

function Edit() {

      const [data, setData] = useState([]);
      const {id} = useParams();

      useEffect(() => {
            // fetch('http://localhost:8000/api/products/'+id)
            // .then(resp => resp.json())
            // .then(resp => {
            //   setData(resp);
            // });
            

            axios.get('http://localhost:8000/api/products/'+id)
            .then ((resp)=> setData(resp))
            .catch((resp) => console.log('Klaida'+ resp))
            .finally((resp)=>console.log(resp))

      },[]);
                  
      
      // const handleField = (e) => {
      //       setData({...data, [e.target.name] : e.target.value});
      // }
      
      return (

            <div className="container">
                  {id}
                  {data}
                  
                  
            {/* {data.map(prod => <div>{prod.id}</div>)} */}
            
                  
                  {/* <form>
                        <label className="form-label">
                              Name:
                        </label>
                        <input className="form-control" type="text" name="name" value="product.name" />

                        <label className="form-label">
                              Description:
                        </label>
                        <textarea className="form-control" name="product.description">
                              product.description
                        </textarea>

                        <label className="form-label">
                              SKU:
                        </label>
                        <input className="form-control" type="text" name="sku" value="product.sku" />
                        
                        <label className="form-label">
                              Price:
                        </label>
                        <input className="form-control" type="number" step="0.01" name="price" value="product.price" />

                        <label className="form-label">
                              warehouse_qnt
                        </label>
                        <input className="form-control" type="number" step="1" name="warehouse_qnt" value="product.warehouse_qnt" />

                        <label className="form-label">
                              Picture
                        </label>
                        <img src="prduct.photo" alt="product.name" />
                  </form> */}
            </div>
      )
}

export default Edit;