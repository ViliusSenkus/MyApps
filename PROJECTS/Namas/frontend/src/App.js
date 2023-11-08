import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";


// importing pages:
import Statistic from "./pages/statistic/Statistic";
import Entrie from "./pages/entrie/Entrie";
import PurchaseList from "./pages/purchaseList/PurchaseList";
import PurchaseNew from "./pages/purchaseNew/PurchaseNew";
import ProductList from "./pages/productList/ProductList";
import ProductNew from "./pages/productNew/ProductNew";
import E404 from "./pages/e404/E404";

import MainContext from "./MainContext";
import MainLayout from "./layouts/MainLayout";
import Spaces from "./components/entries/Spaces";
import Supplier from "./components/entries/Supplier";

//running useContext_hook

function App() {

  const [purchaseData, setPurchaseData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [productData, setProductData] = useState([]);

  const contextValues = {
    purchaseData,
    setPurchaseData,
    loader,
    setLoader,
    productData,
    setProductData
  };

  return (
    
    <BrowserRouter>
      <MainContext.Provider value={contextValues}>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Statistic />} />
            <Route path="/entrie" element={<Entrie />} >
              <Route path="/entrie/space" element={<Spaces />} />
              <Route path="/entrie/supplier" element={<Supplier />} />
              <Route path="/entrie/*" element={<E404 />} />
            </Route>
            {/* <Route path="/" element={<PurchaseList />} />
            <Route path="/new/" element={<PurchaseNew />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/new" element={<ProductNew />} /> */}
            <Route path="*" element={<E404 />} />
          </Routes>
        </MainLayout>
      </MainContext.Provider>
    </BrowserRouter>
    
  );
}

export default App;
