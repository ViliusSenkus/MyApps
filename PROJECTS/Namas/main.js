let item = new Item("trečias daiktas");

let table = document.querySelector("tbody");
let rows = table.querySelectorAll("tr");
let newRow = `<tr><td>2</td><td></td>${item.name}<td>425.73EUR</td><td>2022-07-18</td><td>Lemora</td></tr>`
// table.append.newRow ...........

let purchase = new Purchase();
console.log(item.get());
console.log(purchase.get());