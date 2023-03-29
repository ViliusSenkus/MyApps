import './App.css';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/Main';
import Products from './pages/Products';
import AdminProducts from './pages/admin/Products';
import AdminProductEdit from './pages/admin/Edit';
import AdminNewProduct from './pages/admin/NewProduct';
// Kontekstas
import MainContext from './context/MainContext';
import { useState } from 'react';


// function App() {

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:8000/api/')
//     .then(resp => resp.json())
//     .then(resp => {
//       setData(resp);
//     });

//     // axios.get('http://localhost:8000/api/')
//     // .then(resp => setData(resp.data));
//     // console.log(resp);
//   }, []);
  

  

//   return (
//     <div className="container">
//       <h1>Mūsų produktai</h1>
//       <div className='row'>
//         {data.map(product =>
//         <div className='col-4' key={product.id}>
//           <img src={'http://localhost:8000'+product.photo} alt={product.name} />
//           <h4>{product.name}</h4>
//           <h5 className="text-danger-emphasis">{product.price}</h5>
//         </div>)}
//       </div>
//     </div>
//   )
// }

function App() {

  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState();


  const contextValues = {data, setData, refresh, setRefresh, loading, setLoading, alert, setAlert };

  return(
    <>
    <BrowserRouter>
      <MainContext.Provider value={contextValues}>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/admin" element={<AdminProducts />} />
            <Route path="/admin/edit/:id" element={<AdminProductEdit />} />
            <Route path="/admin/newProduct" element={<AdminNewProduct />} />
          </Routes>
        </MainLayout>
      </MainContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App;
