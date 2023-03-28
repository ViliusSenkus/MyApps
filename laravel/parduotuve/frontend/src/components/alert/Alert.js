function Alert(props){

      return props.alert &&  <div className={'alert alert-'+props.alert.s}>{props.alert.m}</div>
      
}

export default Alert;