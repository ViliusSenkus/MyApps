function Loading(loading){
      
      console.log(loading);

      return(
            loading && 
            <div className="loader-container loading">
                  <span className="loader"></span>
            </div>            
      )
}

export default Loading;