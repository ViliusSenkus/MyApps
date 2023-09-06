import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import MainContext from "../MainContext";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Loader from "../components/generalComponents/Loader";
import ModalWindow from "../components/generalComponents/ModalWindow";


function MainLayout(props) {

      
      const navigation = useLocation();
      const {setLoader} = useContext(MainContext);

      useEffect(() => {
            setLoader(true);
      }, [navigation])

      return(
            <>
                  <Loader />
                  <ModalWindow />
                  <Header />
                  <main>
                        {props.children}
                  </main>
                  <Footer />
            </>
      )
}

export default MainLayout;