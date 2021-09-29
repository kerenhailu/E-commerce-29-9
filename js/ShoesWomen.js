var btn = document.getElementsByClassName("btnProducts");

for (let i = 0; i < Products.length; i++) {
  if (Products[i].Category == "ShoesWomen") {
    sectionProducts.innerHTML += `<article class="artProducts"><img src="${Products[i].img[0]}"><img src="${Products[i].img[1]}">
    <h1 id="NameProducts">${Products[i].name}</h1>
    <h3>${Products[i].description}</h3>
       <h3 id="PriceProducts">${Products[i].price}$</h3>
       <br>${Products[i].button}<br><br>
       </article>`;

    for (let j = 0; j < btn.length; j++) {
      btn[j].onclick = () => {
        arrayBuy.push(
          `${Products[j + 45].name} ${Products[j + 45].description} ${
            Products[j + 45].Category
          } ${Products[j + 45].price}`
        );
        console.log(arrayBuy);
      };
    }
  }
}
