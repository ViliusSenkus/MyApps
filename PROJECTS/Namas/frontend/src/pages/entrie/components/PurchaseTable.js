function Purchasetable(props) {

  return (
    <>
    {props.purchase.map(item =>
        <tr key={item.id}>
          <input type='hidden' name="type" value={item.type} />
          <td>#</td>
          <td>
            <input className="entrie-form-input" name="name" value={item.name} disabled />
          </td>
          {item.manufacturer ?
            <>
              <td>
                <input className="entrie-form-input" name="servmanufacturer" value={item.manufacturer} disabled />
              </td>
              <td>
                <input className="entrie-form-input" name="brand" value={item.brand} disabled />
              </td>
            </> :
            <td colSpan="2">
              <input className="entrie-form-input" name="service_type" value={item.service_type} disabled />
            </td>
          }
          <td>
          <input className="entrie-form-input" name="description" value={item.description} disabled />
          </td>
          <td>
            <input className="entrie-form-input" name="picture" value={item.picture} disabled />
          </td>
          <td>
          <input className="entrie-form-input" name="package_type" value={item.package_type} disabled />
          </td>
          <td>
          <input className="entrie-form-input" name="measurement_units_1" value={item.measurement_units_1} disabled />
          </td>
          <td>
          <input className="entrie-form-input" name="measurement_units_2" value={item.measurement_units_2} disabled />
          </td>
          <td>
          <input className="entrie-form-input" name="quantity1" value={item.quantity1} disabled />
          </td>
          <td>
          <input className="entrie-form-input" name="quantity2" value={item.quantity2} disabled />
          </td>
          <td>
          <input className="entrie-form-input" name="standart_price" value={item.standart_price} disabled />
          </td>
          <td>
          <input className="entrie-form-input" name="price_paid" value={item.price_paid} disabled />
          </td>
          <td>
          <input className="entrie-form-input" name="documents" value={item.documents} disabled />
          </td>
        </tr>
      )
    }
    </>)
}

export default Purchasetable;