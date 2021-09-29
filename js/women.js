var btn = document.getElementsByClassName("btnProducts");
for (let i = 0; i < Products.length; i++) {
  if (Products[i].Category == "women") {
    sectionProducts.innerHTML += `<article class="artProducts"><img src="${Products[i].img[0]}">
    <img src="${Products[i].img[1]}">
    <h1 id="NameProducts">${Products[i].name}</h1>
    <h3>${Products[i].description}</h3>
       <h3 id="PriceProducts">${Products[i].price}$</h3>
       <br>${Products[i].button}<br><br>
       </article>`;

    for (let i = 0; i < btn.length; i++) {
      btn[i].onclick = () => {
        arrayBuy.push(
          `${Products[i].name} ${Products[i].description} ${Products[i].Category} ${Products[i].price}`);
        console.log(arrayBuy);
      };
    }
  }
}
