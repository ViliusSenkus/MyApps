import { useContext, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import MainContext from "../../context/MainContext";
import Loading from "../../components/loading/Loading";
import Alert from "../../components/alert/Alert";


function Categories() {

      const {data, setData, alert, setAlert, refresh, setRefresh, loading, setLoading} = useContext(MainContext);


      useEffect(() => {
      setLoading(true);
      setAlert(false)
      //   fetch('http://localhost:8000/api/')
      //   .then(resp => resp.json())
      //   .then(resp => {
      //     setData(resp);
      //   });

        axios.get('http://localhost:8000/api/categories')
        .then(resp => {
                setData(resp.data);
        })
        .finally( () => setLoading(false));
      }, [refresh]);
      
    
      const handleDelete = (id) => {
        setLoading(true);
        axios.delete('http://localhost:8000/api/categories/' + id)
        .then(resp => {
          setAlert({m:resp.data, s:"success"});
          setRefresh(!refresh);
        })
        .catch(err=>setAlert({m:err.response.data, s:"danger"}))
        .finally(()=>setLoading(false));
      }

      return (
        <>
        {loading && <Loading />}

        <h1 className="py-2">Categories</h1>
        
        <div className="container text-end mb-2">
          <Link to={"/admin/newCategory"} className="btn btn-success">
            Add new category
          </Link>
        </div>

        {alert && <Alert />}


        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>created at</th>
            </tr>
          </thead>
          <tbody>
            {/* padaryti pervadinimus */}
            {data.map(product =>
            <tr key={product.id}>
              <td className="text-end">{product.id}</td>
              <td>{product.name}</td>
              <td>{(new Date(product.created_at)).toLocaleString('lt-LT')}</td>

              <td>
                <button type="button" className="btn btn-danger" onClick={()=>handleDelete(product.id)}>
                  Delete
                </button>

                <Link to={'/admin/editCategory/'+product.id} className="btn btn-warning nav-link px-2 text-white py-1 my-2">
                    Edit
                </Link>
              </td>
            </tr>
            )}
          </tbody>
        </table>
        </>
      )
   
}
export default Categories;