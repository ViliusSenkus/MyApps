import axios from '../../functionall/defaultURL';
import { useContext, useEffect, useState } from 'react';
import MainContext from '../../functionall/MainContext';
import DataContext from '../../context/DataContext';
import Loader from '../generalComponents/Loader';

function Purchase() {

  const { loader, setLoader } = useContext(MainContext);
  const { setMessege, showMessege, setShowMessege } = useContext(DataContext);

  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const [orders, setOrders] = useState([]);
  const [phases, setPhases] = useState([]);
  const [subscopes, setSubscopes] = useState([]);
  const [spaces, setSpaces] = useState([]);
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    setLoader(true);
    axios.get('/purchase')
      .then(resp => setItems(resp.data))
      .catch(error => setMessege('klaida sukeliant purchase sąrašą', error))
      .finally(() => {
        axios.get('/order')
          .then(resp => setOrders(resp.data))
          .catch(error => setOrders([]));
        axios.get('/phase')
          .then(resp => setPhases(resp.data))
          .catch(error => setPhases([]));
        axios.get('/subscope')
          .then(resp => setSubscopes(resp.data))
          .catch(error => setSubscopes([]));
        axios.get('/space')
          .then(resp => setSpaces(resp.data))
          .catch(error => setSpaces([]));
        axios.get('/product')
          .then(resp => setProducts(resp.data))
          .catch(error => setProducts([]));
        axios.get('/service')
          .then(resp => setServices(resp.data))
          .catch(error => setServices([]))
          .finally(setLoader(false));
      }
      )

  }, [refresh])

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoader(true);
    // here data validation should go. At least one first positioin should be filled.

    const data = new FormData(e.target);

    axios.post('/purchase', data)
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
    axios.delete(`/purchase/${id}`)
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
            <td>Order ID</td>
            <td>Phase ID</td>
            <td>SubScope ID</td>
            <td>Space ID</td>
            <td>Type</td>
            <td>Product ID</td>
            <td>Service ID</td>
            <td>Standart price</td>
            <td>Paid</td>
            <td>Quantity 1</td>
            <td>Quantity 2</td>
            <td>Documents</td>
            <td>Discount enabler</td>
            <td>Link</td>
            <td>Description</td>
          </thead>
          <tbody>
            {items && items.map(item =>
              <tr key={item.id} contenteditable="true">
                <td>{item.id}</td>
                <td>{item.order_id}</td>
                <td>{item.building_phase_id }</td>
                <td>{item.application_sub_scope_id }</td>
                <td>{item.space_id }</td>
                <td>{item.type}</td>
                <td>{item.product_id }</td>
                <td>{item.service_id }</td>
                <td>{item.standart_price}</td>
                <td>{item.price_paid}</td>
                <td>{item.quantity1}</td>
                <td>{item.quantity2}</td>
                <td>{item.documents}</td>
                <td>{item.discount_enabler}</td>
                <td>{item.link}</td>
                <td>{item.description}</td>
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
          <label>Order ID</label>
          <select name="order_id">
            {orders && orders.map(order =>
              <option key={order.id} value={order.id}>{order.supplier_id}-{order.purchasement_date}</option>
            )}
          </select>
        </div>
        <div className="inputField">
          <label>Phase ID</label>
          <select name="building_phase_id">
            {phases && phases.map(phase =>
              <option key={phase.id} value={phase.id}>{phase.name}</option>
            )}
          </select>
        </div>
        <div className="inputField">
          <label>SubScope ID</label>
          <select name="application_sub_scope_id">
            {subscopes && subscopes.map(subscope =>
              <option key={subscope.id} value={subscope.id}>{subscope.name}</option>
            )}
          </select>
        </div>
        <div className="inputField">
          <label>Space ID</label>
          <select name="space_id">
            {spaces && spaces.map(space =>
              <option key={space.id} value={space.id}>{space.name}</option>
            )}
          </select>
        </div>
        <div className="inputField">
          <label>Type</label>
          <select name="type">
              <option value="product">Product</option>
              <option value="service">Service</option>
          </select>
        </div>
        <div className="inputField">
          <label>Product ID</label>
          <select name="product_id">
            {products && products.map(product =>
              <option key={product.id} value={product.id}>{product.id}</option>
            )}
          </select>
        </div>
        <div className="inputField">
          <label>Service ID</label>
          <select name="service_id">
            {services && services.map(service =>
              <option key={service.id} value={service.id}>{service.name}</option>
            )}
          </select>
        </div>
        <div className="inputField">
          <label>Standart price</label>
          <input type="number" step="0.01" name="standart_price" />
        </div>
        <div className="inputField">
          <label>Paid</label>
          <input type="number" step="0.01" name="price_paid" />
        </div>
        <div className="inputField">
          <label>Quantity 1</label>
          <input type="number" step="0.01" name="quantity1" />
        </div>
        <div className="inputField">
          <label>Quantity 2</label>
          <input type="number" step="0.01" name="quantity2" />
        </div>
        <div className="inputField">
          <label>Documnets</label>
          <input type="text" name="documents" />
        </div>
        <div className="inputField">
          <label>Discount enabler</label>
          <input type="text" name="discount_enabler" />
        </div>
        <div className="inputField">
          <label>Link</label>
          <input type="text" name="link" />
        </div>
        <div className="inputField">
          <label>Description</label>
          <textarea name="description" />
        </div>
        <button type="submit">Save</button>
      </form>
      <td></td>
    </>
  )
}

export default Purchase;