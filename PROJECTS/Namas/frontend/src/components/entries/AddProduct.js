import { useContext } from "react";
import SelectorMain from "./SelectorMain";
import EntrieContext from "../../context/EntrieContext";

function AddProduct() {

  const { setAddProduct } = useContext(EntrieContext);

  const handleClose = () => {
    setAddProduct(false);
  }
  return (
    <>
      <SelectorMain name='manufacturer' />
      <SelectorMain name='brand' />
      <SelectorMain name='product' />

      
      {/* pirkimo produktų ir paslaugų sąrašas */}
      <table className='full-grid-row'>
        <thead>
          <tr>
            <th>#</th>
            <th>Prekės/paslaugos pavadinimas</th> {/*service name */}
            <th>Gamintojas</th> {/*service type*/}
            <th>Modelis</th>    {/*service type*/}
            <th>Aprašymas</th>  {/*service description*/}
            <th>Foto</th>       {/*service picture*/}
            <th>Pakuotės tipas</th>
            <th>matavimo vienetai 1</th>  {/*service accounting unit 1 */}
            <th>matavimo vienetai 2</th>  {/*service accounting unit 2 */}
            <th>Kiekis 1</th>
            <th>Kiekis 2</th>
            <th>Standartinė kaina</th>
            <th>Sumokėta kaina</th>
            <th>Dokumentai</th>
          </tr>
          {/* 
        Nuoalidos kortelė
        Nuoroda į produktą
        Aprašymas --- kažkur nereikalingas arba prie produkto arba prie purchase.
         */}
        </thead>
        <tbody>

        </tbody>
      </table>



      <button onClick={handleClose}>Close</button>

    </>
  )
}
export default AddProduct;