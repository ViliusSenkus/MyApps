import { useContext } from "react";
import { useLocation } from "react-router-dom";

import MainContext from "../MainContext";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Loader from "../components/generalComponents/Loader";


function MainLayout(props) {

      
      const navigation = useLocation();
      const {loader} = useContext(MainContext);

      return(
            <>
                  <>                
                  <Header />
                  <main>
                        {props.children}
                  </main>
                  <Footer />
                  {loader && <Loader />}
                  </>
            </>
      )
}

export default MainLayout;