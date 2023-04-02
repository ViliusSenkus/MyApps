import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import Loading from '../../components/loading/Loading';
import {Link} from "react-router-dom";
import Alert from '../../components/alert/Alert';
import MainContext from "../../context/MainContext";
import CategoriesList from "../../components/CategoriesList";

function Edit() {

      const {data, loading, setLoading, alert, setAlert} = useContext(MainContext);
      const [item, setItem] = useState(data);
      const {id} = useParams();

      const [cat, setCat] = useState([]);
      useEffect(() => {
            setLoading(true);
            // fetch('http://localhost:8000/api/products/'+id)
            // .then(resp => resp.json())
            // .then(resp => {
            //   setData(resp);
            // });
            

            axios.get('http://localhost:8000/api/products/'+id)
            .then ((resp)=> setItem(resp.data))
            .catch((resp) => console.log('Klaida'+ resp));
            
            axios.get('http://localhost:8000/api/categories')
            .then((resp) => setCat(resp.data))
            .catch((error)=> setAlert({m: error.data, s:'danger'}))


            setLoading(false);
      },[]);
               
      const handleSubmit = (e) =>{
            e.preventDefault();
            setLoading(true);

            const formData=new FormData(e.target);

           let list={}
            for (const x of formData) {
                  console.log(x);
                  // for (const y of x)
                  //  console.log(x[0]);
                  //  data.append(property, value);

                  // if (x[0]=="categories[]"){
                  //       list={...list, "categories" : [x[1]]}
                  // }
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
                                    <input className="form-control" type="text" name="name" defaultValue={item.name} />
                              </div>
                        </div>

                        <div className="form-group row py-2">
                              <label className="col-sm-2 col-form-label">
                                    Description:
                              </label>
                              <div className="col-sm-10">
                                    <textarea className="form-control" name="description" defaultValue={item.description}>
                                    </textarea>
                              </div>
                        </div>

                        <div className="form-group row py-2">
                              <label className="col-sm-2 col-form-label">
                                    SKU:
                              </label>
                              <div className="col-sm-10">
                                    <input className="form-control" type="text" name="sku" defaultValue={item.sku} />
                              </div>
                        </div>

                        <div className="form-group row py-2">      
                              <label className="col-sm-2 col-form-label">
                                    Price:
                              </label>
                              <div className="col-sm-10">
                                    <input className="form-control" type="number" step="0.01" name="price" defaultValue={item.price} />
                              </div>
                        </div>

                        <div className="form-group row py-2">
                              <label className="col-sm-2 col-form-label">
                                    warehouse_qnt
                              </label>
                              <div className="col-sm-10">
                                    <input className="form-control" type="number" step="1" name="warehouse_qnt" defaultValue={item.warehouse_qnt} />
                              </div>
                        </div>
                        
                        <div className="form-group row py-2">
                              <label className="col-sm-2 col-form-label">
                                    Status
                              </label>
                              <div className="col-sm-10">
                                    <input className="form-control" type="text" name="status" defaultValue={item.status} />
                              </div>
                        </div>

                        {/* <div className="form-group row py-2">
                              <label className="col-sm-2 col-form-label">
                                    Picture
                              </label>
                              <div className="col-sm-10">
                                    <img src={'http://localhost:8000/photos/'+item.photo} alt={item.name} className="h-25" />
                              </div>
                        </div> */}

                        <div className="form-label">
                        Categories
                        </div>

                        {cat.map(item => 

                        <CategoriesList cat={item.name} list={item.categories}/>
                        // {item.categories.map(cat=>{
                        //       let checked="";
                        //       (cat.name == item.name) ? checked="checked" : checked="";
                        
                        // <div key={item.id}>
                        //       <input type="checkbox" className="form-check-input mt-2" name="categories[]"  value={item.id} />
                        //       <label className="ms-2 mt-1">{item.name}</label> 
                        // </div>
                        //       }
                        // )}
                        )}
                        

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