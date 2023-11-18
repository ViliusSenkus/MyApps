import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";


// importing pages:
import Statistic from "./pages/statistic/Statistic";
import Entrie from "./pages/entrie/Entrie";
import DataPages from "./pages/dataPages/DataPages";
import E404 from "./pages/e404/E404";

import MainContext from "./functionall/MainContext";
import MainLayout from "./layouts/MainLayout";

import Spaces from "./pages/dataPages/components/Spaces";
import Supplier from "./pages/dataPages/components/Supplier";
import PurchaseList from "./pages/dataPages/components/PurchaseList";
import ProductList from "./pages/dataPages/components/ProductList";

//running useContext_hook

function App() {
  
  // Declaring states for variables:

  // Common
  const [loader, setLoader] = useState(false);

  // New purchasement data. used at <Entrie> component and it's subcomponents
  const [newSupplier, setNewSupplier] = useState([]);

  const contextValues = {
    loader,
    setLoader,
    // naujo pirkimo suvedimui naudojami kintamieji <entrie> komponenete
    newSupplier,
    setNewSupplier
  };

  return (
    
    <BrowserRouter>
      <MainContext.Provider value={contextValues}>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Statistic />} />
            <Route path="/entrie" element={<Entrie />} />
            <Route path="/data" element={<DataPages /> } >
              <Route path="/data/space" element={<Spaces className="container" />} />
              <Route path="/data/supplier" element={<Supplier className="container" />} />
              <Route path="/data/purchase" element={<PurchaseList />} />
              <Route path="/data/product" element={<ProductList />} />
              <Route path="/data/*" element={<E404 />} />
            </Route>
            {/* 
            <Route path="/new/" element={<PurchaseNew />} />
            <Route path="/products/new" element={<ProductNew />} />
            */}
            <Route path="*" element={<E404 />} />
          </Routes>
        </MainLayout>
      </MainContext.Provider>
    </BrowserRouter>
    
  );
}

export default App;
