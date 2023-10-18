import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";


// importing pages:
import Back_request from "./pages/Back_request";
import PurchaseList from "./components/body/purchaseList/PurchaseList";
import PurchaseNew from "./components/body/purchaseNew/PurchaseNew";
import E404 from "./pages/e404/E404";

import MainContext from "./MainContext";
import MainLayout from "./layouts/MainLayout";


//running useContext_hook

function App() {

  const [purchaseData, setPurchaseData] = useState([]);
  const [loader, setLoader] = useState();

  useEffect(()=>{
    setLoader(true);

    axios.get('http://localhost:8000/api/purchases')
    .then(resp => {setPurchaseData(resp.data)})
    .finally(() => setLoader(false));
  }, [])

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
          <Back_request><h2>Backo užklausos</h2></Back_request>
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
