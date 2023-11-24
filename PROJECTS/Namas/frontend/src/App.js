import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainContext from "./functionall/MainContext";
import MainLayout from "./layouts/MainLayout";

// importing pages:
import Statistic from "./pages/statistic/Statistic";
import Entrie from "./pages/entrie/Entrie";
import DataPages from "./pages/dataPages/DataPages";
import E404 from "./pages/e404/E404";

//'data' page components needed for routing
import Scope from "./pages/dataPages/components/Scope";
import SubScope from "./pages/dataPages/components/SubScope";
import Phase from "./pages/dataPages/components/Phase";
import Spaces from "./pages/dataPages/components/Spaces";
import Supplier from "./pages/dataPages/components/Supplier";
import Purchase from "./pages/dataPages/components/Purchase";
import Manufacturer from "./pages/dataPages/components/Manufacturer";
import Brand from "./pages/dataPages/components/Brand";
import Product from "./pages/dataPages/components/Product";
import Service from "./pages/dataPages/components/Service";
import Order from "./pages/dataPages/components/Order";


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
              <Route path="/data/scope" element={<Scope className="container" />} />
              <Route path="/data/subscope" element={<SubScope className="container" />} />
              <Route path="/data/phase" element={<Phase className="container" />} />
              <Route path="/data/space" element={<Spaces className="container" />} />
              <Route path="/data/supplier" element={<Supplier className="container" />} />
              <Route path="/data/manufacturer" element={<Manufacturer className="container" />} />
              <Route path="/data/brand" element={<Brand className="container" />} />
              <Route path="/data/product" element={<Product className="container" />} />
              <Route path="/data/service" element={<Service className="container" /> } />
              <Route path="/data/order" element={<Order className="container" />} />
              <Route path="/data/purchase" element={<Purchase className="container" />} />
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
