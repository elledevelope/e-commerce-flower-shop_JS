class Products {
  constructor() {
    this.classNameActive = ' products-element__btn_active';
    this.labelAdd = 'Acheter';
    this.labelRemove = 'Supprimer';
  }

  handelSetLocationStorage(){
    console.log('ok');

  }


  render() {
    const ProductsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";

    CATALOG.forEach(({ id, name, price, img }) => {
      //console.log(id, name, price, img);

      //variables for active button and to change text on the buttons when product is in shopping cart:
      let activeClass = '';
      let activeText = '';

      //function to change text on the buttons depending on the condition if a products is present or not in the web browers Local Storage:
      if (ProductsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeText = this.labelRemove;
        activeClass = ' ' + this.classNameActive;
      }

      htmlCatalog += `
            <li class="products-element">
            <span class="products-element__name">${name}</span>
            <img class="products-element__img" src="${img}" />
            <span class="products-element__price">🏵️ ${price.toLocaleString(
              "fr-FR",
              { style: "currency", currency: "EUR" }
            )}</span>
            <button class="products-element__btn${activeClass}" onclick="productsPage.handelSetLocationStorage();">${activeText}</button>
            </li>
            `;
    });
    const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();
