// import axios from 'axios';
import './PurchaseList.css';

function PurchaseList() {

  const foo1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const foo2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'edit, delete']

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   axios.post('http://localhost:8000/api/purchases', data)
  //   .then(resp => {
  //   setMessage({m: resp.data, s: 'success'});
  //   setTimeout(() => navigate('/admin'), 2000);
  //   })
  //   .catch(error => {
  //   setMessage({m: error.response.data, s: 'danger'})
  //   })
  //   .finally(() => setLoading(false));
  // }

  return (
    <table>
      <thead>
        <tr>
          <td>#</td>
          <td>Purchase Date</td>
          <td>Purchase Place</td>
          <td>Payed By</td>
          <td>Offer document</td>
          <td>Purchasement document</td>
          <td>Prepayment document</td>
          <td>Final payment document</td>
          <td>invoice</td>
          <td>Other documents</td>
          <td>Comments</td>
          <td>Purchase finished</td>
          <td>Options</td>
        </tr>
      </thead>
      <tbody>
        {foo1.map(numbers =>
          <tr key={numbers}>
            <td>{numbers}</td>
            {foo2.map(text =>
              <td key={text}>{text}</td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default PurchaseList;