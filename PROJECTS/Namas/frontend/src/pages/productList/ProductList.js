import {useContext, useState, useEffect } from 'react';
import './ProductList.css';
import axios from 'axios';

import MainContext from '../../MainContext';

// importing components
import Loader from "../../components/generalComponents/Loader";

function ProductList() {

  const {loader, setLoader, productData, setProductData} = useContext(MainContext)

  useEffect(()=>{
    setLoader(true);
    axios.get('http://localhost:8000/api/product')
    .then(resp => setProductData(resp.data))
    .catch(error => console.log('klaida sukeliant produktų sąrašą', error))
    .finally(setLoader(false))
  },[])

  const handleDelete = (id) =>{
    axios.delete(`http://localhost:8000/api/product/${id}`)
    .then (resp => console.log(resp.data))
    .catch (error => {console.log('Klaida', error)})
    .finally (console.log('finally ištrinta'))
  }
  
  return (
    <>
    {loader && <Loader />}
    <table>
      <thead>
        <tr>
          <td>#</td>
          <td>Name</td>
          <td>Description</td>
          <td>Picture</td>
          <td>Unit type</td>
          <td>Options</td>
        </tr>
      </thead>
      <tbody>
        { productData && productData.map(item =>
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.photo}</td>
            <td>{item.measurement_unit}</td>
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