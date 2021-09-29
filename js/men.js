var btnMen = document.getElementsByClassName("btnProducts");

for (let i = 0; i < Products.length; i++) {
  if (Products[i].Category == "men") {
    sectionProducts.innerHTML += `<article class="artProducts"><img src="${Products[i].img[0]}">
    <img src="${Products[i].img[1]}">
    <h1 id="NameProducts">${Products[i].name}</h1>
    <h3>${Products[i].description}</h3>
       <h3 id="PriceProducts">${Products[i].price}$</h3>
       <br>${Products[i].button}<br><br>
       </article>`;

    for (let j = 0; j < btnMen.length; j++) {
      btnMen[j].onclick = () => {
        arrayBuy.push(
          `${Products[j + 15].name}${Products[j + 15].description}${
            Products[j + 15].Category
          } ${Products[j + 15].price}`
        );
        console.log(arrayBuy);
        
      };
    }
  }
}
