// importing components:
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PurchaseList from "./components/body/purchaseList/PurchaseList";
import PurchaseNew from "./components/body/purchaseNew/PurchaseNew";

function App() {
  return (
    <>
      <Header />
      <PurchaseNew />
      <PurchaseList />
      <Footer />
    </>
  );
}

export default App;
