import {useContext, useState, useEffect } from 'react';
import './ProductList.css';
import axios from 'axios';

import MainContext from '../../MainContext';

// importing components
import Loader from "../../components/generalComponents/Loader";

function ProductList() {

  const {loader, setLoader, productData, setProductData} = useContext(MainContext)

  const [columnNames, setColumnNames] = useState([])

  useEffect(()=>{
    setLoader(true);
    axios.get('http://localhost:8000/api/product')
    .then(resp => setProductData(resp.data))
    .catch(error => console.log('klaida sukeliant produktų sąrašą', error))
    .finally(() => {
      retrieveKey(productData[0]);
      setLoader(false)
    }
      )
  },[])

  const handleDelete = (id) =>{
    axios.delete(`http://localhost:8000/api/product/${id}`)
    .then (resp => console.log(resp.data))
    .catch (error => {console.log('Klaida', error)})
    .finally (console.log('finally ištrinta'))
  }
  

  const retrieveKey = (d) => {
    let columns = [];
    for ( const x in d){
      columns.push(x);
    }
    setColumnNames(columns)
  }
  return (
    <>
    {loader && <Loader />}
    {productData && retrieveKey}
    <table>
      <thead>
        <tr>
        {columnNames && columnNames.map( item =>
          <td key={item.value}>{item}</td>
        
          // <td>#</td>
          // <td>Name</td>
          // <td>Description</td>
          // <td>Picture</td>
          // <td>Unit type</td>
          // <td>Options</td>
          )} 
                 </tr>
      </thead>
      <tbody>
        { productData && productData.map(item =>
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.manufacturer}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.logo}</td>
            <td>{item.created_at}</td>
            <td>{item.updated_at}</td>
            <td>
              <button>Edit</button>
              <button onClick={()=>handleDelete(item.id)}>Delete</button>
            </td>
            
          </tr>
          
        ) }
      </tbody>
    </table>
    </>
  )
}

export default ProductList;