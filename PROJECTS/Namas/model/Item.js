class Item {

      constructor (id, name){
           this.name = name;
           this.id = id;
      }

      showName(){
            return this.name;
      }

      showId(){
            return this.id;
      }

      get(){
            return this
      }

}

class Purchase {
      constructor (id, purchaseDate, purchasePlace, totalSum, paymentMethod){
            this.id = id;
            this.purchaseDate = purchaseDate;
            this.purchasePlace = purchasePlace;
            this.totalSum = totalSum;
            this.paymentMethod = paymentMethod;
      }

      showPurchase(id){
            if (searchableObjectId = id){
                  return this
            }
            return "no such purchase have been commited"
      }
}