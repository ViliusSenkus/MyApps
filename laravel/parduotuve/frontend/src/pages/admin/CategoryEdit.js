import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useParams} from "react-router-dom";
import Loading from '../../components/loading/Loading';
import {Link} from "react-router-dom";
import Alert from '../../components/alert/Alert';
import MainContext from "../../context/MainContext";

function EditCategory() {

      const {data, loading, setLoading, alert, setAlert} = useContext(MainContext);
      const [cat, setCat] = useState(data);
      const {id} = useParams();

      useEffect(() => {
            setLoading(true);
            // fetch('http://localhost:8000/api/products/'+id)
            // .then(resp => resp.json())
            // .then(resp => {
            //   setData(resp);
            // });
            

            axios.get('http://localhost:8000/api/categories/'+id)
            .then ((resp)=> setCat(resp.data))
            .catch((resp) => console.log('Klaida'+ resp))

            setLoading(false);
      },[]);
               
      const handleSubmit = (e) =>{
            e.preventDefault();
            setLoading(true);

            const data=new FormData(e.target);

           let list={}
            for (const x of data) {
                  // for (const y of x)
                  //  console.log(x[0]);
                  //  data.append(property, value);
                  list={...list, [x[0]] : x[1]};
            }
            
            // Laravelis nepriima PUT metodu per FormData paimtų duomenų, todėl galima apeiti taip:
            // 
            // data.append("_method", "put");
            // axios.post('http://localhost:8000/api/products/' + id, data)
            
            axios.put('http://localhost:8000/api/categories/' + id, list)
            .then (resp => setAlert ({m: resp.data, s: "success"}))
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
                  <h2 className="py-3">Category Edit</h2>
                  {alert && <Alert alert={alert} />}
                  <h5>Product id {id} </h5>
                  
                  
            {/* {data.map(prod => <div>{prod.id}</div>)} */}
            
                  
                  <form onSubmit={handleSubmit}>
                        <div className="form-group row py-2">
                              <label className="col-sm-2 col-form-label">
                                    Name:
                              </label>
                              <div className="col-sm-10">
                                    <input className="form-control" type="text" name="name" defaultValue={cat.name} />
                              </div>
                        </div>

                        <div className="mt-3 d-flex flex-row justify-content-between">
                              <Link to="/admin/categories" className="btn btn-secondary px-5" >
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

export default EditCategory;