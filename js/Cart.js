var obj;
var sumOfProducts=0;

  ArticleCard.innerHTML = `<table id="tableCard">
<tr>
  <th><h3>Name :</h3></th>
  <th><h3>price :</h3></th>
  <th><h3>Amount :</h3></th>
</tr>
</table>`;

for (let i = 0; i < 4; i++) {
  obj = { name: Products[i].name, price: Products[i].price};
  arrayBuy.push(obj);

tableCard.innerHTML+=`<tr>
<td>${arrayBuy[i].name}</td>
<td>${arrayBuy[i].price}</td>
<td><button class="btnMore">▲</button>
<h3 class="Amount">1</h3>
<button class="btnDelet">▼</button></td>
</tr>`

sumOfProducts=sumOfProducts+arrayBuy[i].price}
tableCard.innerHTML+=`<tr id="trOfSum">
<td><span>SAM :</span></td>
<td id=sumInTable>${sumOfProducts}</td>
</tr>`

var deletBtn = document.getElementsByClassName("btnDelet");
var MoreBtn = document.getElementsByClassName("btnMore");

var Amount = document.getElementsByClassName("Amount");
for (let i = 0; i < MoreBtn.length; i++) {
  MoreBtn[i].onclick=()=>{
      Amount[i].innerText++;
      sumOfProducts=sumOfProducts+arrayBuy[i].price
      sumInTable.innerText=sumOfProducts
  }
}

for (let i = 0; i < deletBtn.length; i++) {
  deletBtn[i].onclick=()=>{
    if(Amount[i].innerText>0){
    Amount[i].innerText--;
    sumOfProducts=sumOfProducts-arrayBuy[i].price
    sumInTable.innerText=sumOfProducts
  }
}
}
