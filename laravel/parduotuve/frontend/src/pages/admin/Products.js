import { useState, useEffect } from "react";
import axios from 'axios';

function Products() {
      const [data, setData] = useState([]);

      useEffect(() => {
      //   fetch('http://localhost:8000/api/')
      //   .then(resp => resp.json())
      //   .then(resp => {
      //     setData(resp);
      //   });
    
        axios.get('http://localhost:8000/api/products')
        .then(resp => setData(resp.data));
      }, []);
      
    
      const handleDelete = (id) => {
        axios.delete('http://localhost:8000/api/products' + id)
        .then(resp => console.log(resp.data));

      }
    
      return (
        <>
        <h1 className="py-2">Administravimo erdvė</h1>
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
              <td><img src={'http://localhost:8000'+product.photo} alt={product.name} /></td>
              <td className="text-end">{product.warehouse_qnt}</td>
              <td className="text-end">{product.price} €</td>
              <td className="text-end">{product.status ? "Pardavime" : "Neparduodamas"}</td>
              <td>{(new Date(product.created_at)).toLocaleString('lt-LT')}</td>
              <td>
                <button type="button" className="btn btn-danger" onClick={()=>handleDelete(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
            )}
          </tbody>
        </table>
        </>
      )
   
}
export default Products;