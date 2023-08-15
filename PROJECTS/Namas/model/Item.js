class Item {

      constructor (id, name, price, discountedPrice){
           this.id = id;
           this.name = name;

           //toliau einancias savybes reikia kelti prie pirkimo arba dar toliau --- galvoti kur padėti.
           this.price = price;
           this.discountedPrice = discountedPrice;
           this.discount = discountedPrice*100/price;
      }

      showName(){
            return this.name;
      }

      showId(){
            return this.id;
      }

      get(){
            return this;
      }
      put(name){
            //kreipimasis į db, įdėjimas ir id priskyrimas, surišimas su užsakymu, dabro baru ir t.t.
      }

}

class Purchase {

      constructor (id, purchaseDate, purchasePlaceID, totalSum, paymentMethodID, purchaseItemsIDs){
            this.id = id;
            this.purchaseDate = purchaseDate;
            this.totalSum = totalSum;
            this.purchasePlace = purchasePlaceID;
            this.paymentMethod = paymentMethodID;
            this.purchaseItems = purchaseItemsIDs;
      }

      showPurchase(id){
            if (searchableObjectId = id){
                  return this
            }
            return "no such purchase have been commited"
      }

      get(){
            return this;
      }

      getPurchaseItemsIds(){
            //gaunami visi pirkiniai
      }

}

class PurchasePlace {

      constructor (id, purchasePlace){
            this.id = id;
            this.purchasePlace = purchasePlace;
      }
}