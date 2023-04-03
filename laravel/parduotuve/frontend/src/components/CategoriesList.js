import {useContext } from "react";
import MainContext from "../context/MainContext";

const CategoriesList=(catId, catName, itemCat)=>{

      const {categories} = useContext(MainContext);

      itemCat.map(cat => {
            if (categories.name == cat)
                  return (
                        <div>
                              <input type="checkbox" className="form-check-input mt-2" name="categories[]"  value={catId} checked/>
                              <label className="ms-2 mt-1">{catName}</label> 
                        </div>
                        );
            
            })

      return(           
            <div>
                  <input type="checkbox" className="form-check-input mt-2" name="categories[]"  value={catId} />
                  <label className="ms-2 mt-1">{catName}</label> 
            </div>
      )
}

export default CategoriesList