import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// importing components:
import PurchaseList from "./components/body/purchaseList/PurchaseList";
import PurchaseNew from "./components/body/purchaseNew/PurchaseNew";
import E404 from "./pages/e404/E404";

import MainContext from "./MainContext";
import MainLayout from "./layouts/MainLayout";

function App() {

  const [purchaseData, setPurchaseData] = useState([]);
  const [loader, setLoader] = useState(false);

  const contextValues = {
    purchaseData,
    setPurchaseData,
    loader,
    setLoader
  };

  return (
    
    <BrowserRouter>
      <MainContext.Provider value={contextValues}>
        <MainLayout>
          <Routes>
            <Route path="/" element={<PurchaseList />} />
            <Route path="/new/" element={<PurchaseNew />} />
            <Route path="*" element={<E404 />} />
          </Routes>
        </MainLayout>
      </MainContext.Provider>
    </BrowserRouter>
    
  );
}

export default App;
