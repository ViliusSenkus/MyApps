import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainContext from "./functionall/MainContext";
import MainLayout from "./layouts/MainLayout";

// importing pages:
import Statistic from "./pages/Statistic";
import Entrie from "./pages/Entrie";
import DataPages from "./pages/DataPages";
import E404 from "./pages/E404";

//'data' page components needed for routing
import Scope from "./components/dataPage/Scope";
import SubScope from "./components/dataPage/SubScope";
import Phase from "./components/dataPage/Phase";
import Spaces from "./components/dataPage/Spaces";
import Supplier from "./components/dataPage/Supplier";
import Purchase from "./components/dataPage/Purchase";
import Manufacturer from "./components/dataPage/Manufacturer";
import Brand from "./components/dataPage/Brand";
import Product from "./components/dataPage/Product";
import Service from "./components/dataPage/Service";
import Order from "./components/dataPage/Order";


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
            <Route path="*" element={<E404 />} />
          </Routes>
        </MainLayout>
      </MainContext.Provider>
    </BrowserRouter>
    
  );
}

export default App;
