import { useEffect, useContext } from 'react';
import Loading from '../components/loading/Loading';
import MainContext from '../context/MainContext';

// import axios from 'axios';


function Products() {

  const {data, setData, loading, setLoading} = useContext(MainContext);

  useEffect(() => {
    setLoading(true);

    fetch('http://localhost:8000/api/products')
    .then(resp => resp.json())
    .then(resp => {
      setData(resp);
    })
    .finally(()=>setLoading(false));

    // axios.get('http://localhost:8000/api/products')
    // .then(resp => setData(resp.data));
    // console.log(resp);
  }, []);
  
  return (
   <>
    {loading && <Loading />}
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
