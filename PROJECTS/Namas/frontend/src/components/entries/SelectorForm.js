import NewSupplierForm from "./formsNew/NewSupplierForm";
import NewManufacturerForm from "./formsNew/NewManufacturerForm";
import NewBrandForm from "./formsNew/NewBrandForm";

function SelectorForm(props) {

  switch (props.name) {
    case 'supplier':
      return <NewSupplierForm />;
    case 'manufacturer':
      return <NewManufacturerForm />;
    case 'brand':
      return (<div>
        <NewBrandForm />
      </div>);
  }

}

export default SelectorForm;