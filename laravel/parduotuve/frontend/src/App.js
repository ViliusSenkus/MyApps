import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/', {method: "GET", mode: "no-cors"})
    .then(resp => resp.json())
    .then(resp => {
      setData(resp);
    });

    // axios.get('http://localhost:8000/api/')
    // .then(resp => setData(resp.data));
    // console.log(resp);
  }, []);
  

  

  return (
    <div className="container">
      <h1>Mūsų produktai</h1>
      <div className='row'>
        {data.map(product =>
        <div className='col-4'>
          <img src={'http://localhost:8000'+product.photo} alt={product.name} />
          <h4>{product.name}</h4>
          <h5 className="text-danger-emphasis">{product.price}</h5>
        </div>)}
      </div>
    </div>
  )
}

export default App;
