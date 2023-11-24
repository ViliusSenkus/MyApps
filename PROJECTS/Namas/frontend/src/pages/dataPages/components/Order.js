import axios from '../../../functionall/defaultURL';
import { useContext, useEffect, useState } from 'react';
import MainContext from '../../../functionall/MainContext';
import DataContext from '../context/DataContext';
import Loader from '../../../components/generalComponents/Loader';
import { Link } from 'react-router-dom';
import Messege from './Messege';

function Order() {

  const { loader, setLoader } = useContext(MainContext);
  const { setMessege, showMessege, setShowMessege } = useContext(DataContext);

  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    setLoader(true);
    axios.get('/order')
      .then(resp => setItems(resp.data))
      .catch(error => setMessege('klaida sukeliant order sąrašą', error))
      .finally(() => {
        axios.get('/supplier')
          .then(resp => setSuppliers(resp.data))
          .catch(error => setSuppliers([]))
          .finally(setLoader(false));
      }
      )

  }, [refresh])

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoader(true);
    // here data validation should go. At least one first positioin should be filled.

    const data = new FormData(e.target);

    axios.post('/order', data)
      .then(resp => {
        setMessege(resp.data);
        setShowMessege(true);
      })
      .catch(error => {
        setMessege(error);
        setShowMessege(true);
      })
      .finally(() => {
        setRefresh(!refresh);
        setLoader(false)
      });
  }


  const handleEdit = (id) => {
    setMessege('bandymas redaguoti elementą');
  }
  const handleDelete = (id) => {
    setLoader(true);
    axios.delete(`/order/${id}`)
      .then(resp => {
        setMessege('ištrinta sėkmingai', resp.data);
        setShowMessege(!showMessege);
      })
      .catch(error => {
        setShowMessege('Klaida', error);
        setShowMessege(true);
      })
      .finally(() => {
        setRefresh(!refresh);
        setLoader(false);
      });
  }

  return (
    <>
      {loader && <Loader />}
      <div className="container" >
        <table>
          <thead>
            <td>#</td>
            <td>Purchasemenet date</td>
            <td>Supplier ID</td>
            <td>Payment method</td>
            <td>Discount</td>
            <td>Offer Doc</td>
            <td>Purchase Doc</td>
            <td>Prepay Doc</td>
            <td>Final paymnet Doc</td>
            <td>Invoice</td>
            <td>Other Docs</td>
            <td>Comments</td>
            <td>Status</td>
          </thead>
          <tbody>
            {items && items.map(item =>
              <tr key={item.id} contenteditable="true">
                <td>{item.id}</td>
                <td>{item.purchasement_date}</td>
                <td>{item.supplier_id}</td>
                <td>{item.payment_method}</td>
                <td>{item.discount}</td>
                <td>{item.offer_doc}</td>
                <td>{item.purchase_doc}</td>
                <td>{item.prepay_doc}</td>
                <td>{item.final_payment_doc}</td>
                <td>{item.invoice}</td>
                <td>{item.other_docs}</td>
                <td>{item.comments}</td>
                <td>{item.status}</td>
                <td>
                  <button className='edit-button' onClick={() => handleEdit(item.id)}>Edit</button>
                  <button className='delete-button' onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputField">
          <label>Purchasemenet date</label>
          <input type="date" name="purchasement_date" />
        </div>
        <div className="inputField">
          <label>Supplier ID</label>
          <select name="supplier_id">
            {suppliers && suppliers.map(supplier =>
              <option key={supplier.id} value={supplier.id}>{supplier.name}</option>
            )}
          </select>
        </div>
        <div className="inputField">
          <label>Payment method</label>
          <select name="payment_method">
              <option value="cash">Cash</option>
              <option value="bank transfer">Bank transfer</option>
              <option value="card">Card</option>
          </select>
        </div>
        <div className="inputField">
          <label>Discount</label>
          <input type="number" name="discount" />
        </div>
        <div className="inputField">
          <label>Offer Doc</label>
          <input type="text" name="offer_doc" />
        </div>
        <div className="inputField">
          <label>Purchase Doc</label>
          <input type="text" name="purchase_doc" />
        </div>
        <div className="inputField">
          <label>Prepay Doc</label>
          <input type="text" name="prepay_doc" />
        </div>
        <div className="inputField">
          <label>Final paymnet Doc</label>
          <input type="text" name="final_payment_doc" />
        </div>
        <div className="inputField">
          <label>Invoice</label>
          <input type="text" name="invoice" />
        </div>
        <div className="inputField">
          <label>Other Docs</label>
          <input type="text" name="other_docs" />
        </div>
        <div className="inputField">
          <label>Comments</label>
          <input type="text" name="comments" />
        </div>
        <div className="inputField">
          <label>Status</label>
          <select name="status">
              <option value="planned">Planned</option>
              <option value="initiated">Initiated</option>
              <option value="finished">Finished</option>
              <option value="canceled">Canceled</option>
              <option value="first paiment maid">First payment made</option>
              <option value="second paiment maid">Second payment made</option>
          </select>
        </div>
        <button type="submit">Save</button>
      </form>
      <td></td>
    </>
  )
}

export default Order;