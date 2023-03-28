import { useEffect, useState } from 'react';
import Header from '../components/header/Header';
// import axios from 'axios';


function Products() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/products')
    .then(resp => resp.json())
    .then(resp => {
      setData(resp);
    });

    // axios.get('http://localhost:8000/api/products')
    // .then(resp => setData(resp.data));
    // console.log(resp);
  }, []);
  
  return (
   <>
    <Header setData={setData}/>
      <h1 className="py-2">Mūsų produktai</h1>
      <div className='row'>
        {data.map(product =>
        <div className='col-2' key={product.id}>
          <img src={'http://localhost:8000/photos/'+product.photo} alt={product.name} />
          <div className="text-danger-emphasis text-end">{product.price} EUR </div>
          <h5>{product.name}</h5>
        </div>)}
      </div>
      </>
  )
}

export default Products;
