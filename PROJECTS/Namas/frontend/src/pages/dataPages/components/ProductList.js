import {useContext, useState, useEffect } from 'react';
import axios from 'axios';

import MainContext from '../../../functionall/MainContext';

// importing components
import Loader from "../../../components/generalComponents/Loader";

function ProductList() {

  const {loader, setLoader, productData, setProductData} = useContext(MainContext)

  const [columnNames, setColumnNames] = useState([])

  useEffect(()=>{
    setLoader(true);
    axios.get('http://localhost:8000/api/product')
    .then(resp => setProductData(resp.data)
      .then(retrieveKey(productData[0]))
    )
    .catch(error => console.log('klaida sukeliant produktų sąrašą', error))
    .finally(() => {
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
          <td>#</td>
          <td>Manufacturer</td>
          <td>Brand</td>
          <td>Product Name</td>
          <td>Logo</td>
          <td>Options</td>
        </tr>
      </thead>
      <tbody>
        { productData && productData.map(item =>
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.manufacturer}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td><img src={item.logo} alt='logo of company or its product name' /></td>
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