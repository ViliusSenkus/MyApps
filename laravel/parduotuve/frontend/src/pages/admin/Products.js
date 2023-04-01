import { useContext, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import MainContext from "../../context/MainContext";
import Loading from "../../components/loading/Loading";
import Alert from "../../components/alert/Alert";


function Products() {

      const {data, setData, alert, setAlert, refresh, setRefresh, loading, setLoading} = useContext(MainContext);


      useEffect(() => {
      setLoading(true);
      setAlert(false)
      //   fetch('http://localhost:8000/api/')
      //   .then(resp => resp.json())
      //   .then(resp => {
      //     setData(resp);
      //   });

        axios.get('http://localhost:8000/api/products')
        .then(resp => {
                setData(resp.data);
        })
        .finally( () => setLoading(false));
      }, [refresh]);
      
    
      const handleDelete = (id) => {
        setLoading(true);
        axios.delete('http://localhost:8000/api/products/' + id)
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

        <h1 className="py-2">Administravimo erdvė - Produktų sąrašas</h1>
        
        <div className="container text-end mb-2">
          <Link to={"/admin/newProduct"} className="btn btn-success">
            Add new product
          </Link>
        </div>

        {alert && <Alert />}


        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Sku</th>
              <th>Photo</th>
              <th>In Warehouse</th>
              <th>Price</th>
              <th>Status</th>
              <th>Categories</th>
              <th>Created at</th>
              <th>Control</th>
            </tr>
          </thead>
          <tbody>
            {data.map(product =>
            <tr key={product.id}>
              <td className="text-end">{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td className="text-end">{product.sku}</td>
              <td><img src={'http://localhost:8000/photos/'+product.photo} alt={product.name} /></td>
              <td className="text-end">{product.warehouse_qnt}</td>
              <td className="text-end">{product.price}€</td>
              <td className="text-end">{product.status ? "Pardavime" : "Neparduodamas"}</td>
              <td className="text-end">{product.categories.map(cat=>cat.name).join(", ")}</td>
              <td>{(new Date(product.created_at)).toLocaleString('lt-LT')}</td>

              <td>
                <button type="button" className="btn btn-danger" onClick={()=>handleDelete(product.id)}>
                  Delete
                </button>

                <Link to={'/admin/edit/'+product.id} className="btn btn-warning nav-link px-2 text-white py-1 my-2">
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
export default Products;