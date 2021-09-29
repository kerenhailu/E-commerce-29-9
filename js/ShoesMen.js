var btn = document.getElementsByClassName("btnProducts");

for (let i = 0; i < Products.length; i++) {
  if (Products[i].Category == "ShoesMen") {
    sectionProducts.innerHTML += `<article class="artProducts"><img src="${Products[i].img[0]}"><img src="${Products[i].img[1]}">
    <h1 id="NameProducts">${Products[i].name}</h1>
    <h3>${Products[i].description}</h3>
       <h3 id="PriceProducts">${Products[i].price}$</h3>
       <br>${Products[i].button}<br><br>
       </article>`;

    for (let j = 0; j < btn.length; j++) {
      btn[j].onclick = () => {
        arrayBuy.push(
          `${Products[j + 30].name} ${Products[j + 30].description} ${
            Products[j + 30].Category
          } ${Products[j + 30].price}`
        );
        console.log(arrayBuy);
        console.log("ho ho ho");
      };
    }
  }
}
