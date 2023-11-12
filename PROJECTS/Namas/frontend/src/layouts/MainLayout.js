import { useContext } from "react";
import { useLocation } from "react-router-dom";

import MainContext from "../functionall/MainContext";

import Head from "../components/head/Head";
import Foot from "../components/foot/Foot";
import Loader from "../components/generalComponents/Loader";


function MainLayout(props) {

      
      const navigation = useLocation();
      const {loader} = useContext(MainContext);

      return(
            <>
                  <>                
                  <Head />
                  <main>
                        {props.children}
                  </main>
                  <Foot />
                  {loader && <Loader />}
                  </>
            </>
      )
}

export default MainLayout;