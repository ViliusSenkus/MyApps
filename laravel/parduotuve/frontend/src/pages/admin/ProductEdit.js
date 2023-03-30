import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useNavigate, useParams} from "react-router-dom";
import Loading from '../../components/loading/Loading';
import {Link} from "react-router-dom";
import Alert from '../../components/alert/Alert';
import MainContext from "../../context/MainContext";

function Edit() {

      const {data, setData, loading, setLoading, alert, setAlert} = useContext(MainContext);
      const {id} = useParams();

      console.log("funkcijos pradzia ");

      useEffect(() => {
            console.log("use effect pradžia, data reikšmė - ");
            setLoading(true);
            // fetch('http://localhost:8000/api/products/'+id)
            // .then(resp => resp.json())
            // .then(resp => {
            //   setData(resp);
            // });
            

            axios.get('http://localhost:8000/api/products/'+id)
            .then((resp)=>console.log("axios viduje data.name reiksme yra - " + resp.data.name))
            .then ((resp)=> setData(resp.data))
            .catch((resp) => console.log('Klaida'+ resp))
            .finally((resp)=>console.log(resp))


            setLoading(false);
      },[]);
               
      const handleSubmit = (e) =>{
            e.preventDefault();
            setLoading(true);

            const formData=new FormData(e.target);

           let list={}
            for (const x of formData) {
                  // for (const y of x)
                  //  console.log(x[0]);
                  //  data.append(property, value);
                  list={...list, [x[0]] : x[1]};
            }
            
            // Laravelis nepriima PUT metodu per FormData paimtų duomenų, todėl galima apeiti taip:
            // 
            // data.append("_method", "put");
            // axios.post('http://localhost:8000/api/products/' + id, data)
            
            axios.put('http://localhost:8000/api/products/' + id, list)
            .then (resp => setAlert (resp.data))
            .catch((error)=>setAlert({m: error.response.data, s: "danger"}))
            .finally(()=>setLoading(false));
          }
      
      
      // const handleField = (e) => {
      //       setData({...data, [e.target.name] : e.target.defaultValue});
      // }
      
      return (
            <>
            {console.log('returno vidus - ' + data.name)}
            {loading && <Loading />}
            <div className="container">
                  <h2 className="py-3">Admin panel - Product edit</h2>
                  {alert && <Alert alert={alert} />}
                  <h5>Product id {id} </h5>
                  
                  
            {/* {data.map(prod => <div>{prod.id}</div>)} */}
            
                  
                  <form onSubmit={handleSubmit}>
                        <div className="form-group row py-2">
                              <label className="col-sm-2 col-form-label">
                                    Name:
                              </label>
                              <div className="col-sm-10">
                                    <input className="form-control" type="text" name="name" defaultValue={data.name} />
                              </div>
                        </div>

                        <div className="form-group row py-2">
                              <label className="col-sm-2 col-form-label">
                                    Description:
                              </label>
                              <div className="col-sm-10">
                                    <textarea className="form-control" name="description" defaultValue={data.description}>
                                    </textarea>
                              </div>
                        </div>

                        <div className="form-group row py-2">
                              <label className="col-sm-2 col-form-label">
                                    SKU:
                              </label>
                              <div className="col-sm-10">
                                    <input className="form-control" type="text" name="sku" defaultValue={data.sku} />
                              </div>
                        </div>

                        <div className="form-group row py-2">      
                              <label className="col-sm-2 col-form-label">
                                    Price:
                              </label>
                              <div className="col-sm-10">
                                    <input className="form-control" type="number" step="0.01" name="price" defaultValue={data.price} />
                              </div>
                        </div>

                        <div className="form-group row py-2">
                              <label className="col-sm-2 col-form-label">
                                    warehouse_qnt
                              </label>
                              <div className="col-sm-10">
                                    <input className="form-control" type="number" step="1" name="warehouse_qnt" defaultValue={data.warehouse_qnt} />
                              </div>
                        </div>
                        
                        <div className="form-group row py-2">
                              <label className="col-sm-2 col-form-label">
                                    Status
                              </label>
                              <div className="col-sm-10">
                                    <input className="form-control" type="text" name="status" defaultValue={data.status} />
                              </div>
                        </div>

                        <div className="form-group row py-2">
                              <label className="col-sm-2 col-form-label">
                                    Picture
                              </label>
                              <div className="col-sm-10">
                                    <img src="prduct.photo" alt={data.name} />
                              </div>
                        </div>

                        <div className="mt-3 d-flex flex-row justify-content-between">
                              <Link to="/admin" className="btn btn-secondary px-5" >
                                    Return
                              </Link>

                              <input type="reset" className="btn btn-primary px-5" />
                              <button className="btn btn-success px-5">Save</button>
                        </div>
                  </form>
            </div>
            </>
      )
}

export default Edit;