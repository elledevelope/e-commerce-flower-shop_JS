class Header {

    render() {
        const html = `
    <div class ="header-container">
    <div class ="header-counter">    
     <img id = "icon-shopping" src="./assets/img/cart-shopping-solid.svg" alt="icon-shopping-cart">  77
    </div>
</div>
    `;

        ROOT_HEADER.innerHTML = html;
    }


}

const headerPage = new Header();
headerPage.render();