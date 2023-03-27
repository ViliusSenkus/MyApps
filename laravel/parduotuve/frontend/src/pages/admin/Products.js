import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Loading from '../../components/loading/Loader';
import Alert from '../../components/alert/Alert';


function Products() {
      const [data, setData] = useState([]);
      const [alert, setAlert] =  useState(false);
      const [refresh, setRefresh] = useState(false);
      const [loading, setLoading] = useState(false);
      const [showUpdateForm, setShowUpdateForm] = useState('none');

      useEffect(() => {
        setLoading('true');

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
          setAlert(resp.data);
          setRefresh(!refresh);
        })
        .catch(err=>console.log(err.response.data))
        .finally(()=>setLoading(false));
      }

      return (
        <>
        {loading && <Loading />}

       {/* 2ia dedame lauderi su salyga loader && div....lauderio. */}
        <h1 className="py-2">Administravimo erdvė - Produktų sąrašas</h1>
        
        <div className="container text-end mb-2">
          <Link to={"/admin/newProduct"} className="btn btn-success">
            Add new product
          </Link>
        </div>

        {<Alert alert={alert} />}


        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>description</th>
              <th>sku</th>
              <th>photo</th>
              <th>quantity in Warehouse</th>
              <th>price</th>
              <th>status</th>
              <th>created at</th>
              <th>control</th>
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