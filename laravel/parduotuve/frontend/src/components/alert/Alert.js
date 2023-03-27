function Alert(props){

      return props.alert &&  <div className="alert alert-success">{props.alert}</div>
      
}

export default Alert;