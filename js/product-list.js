class ProductList {
    constructor (productsUrl, renderContainer) {
        fetch(productsUrl)
            .then(result => result.json() )
            .then(products => {
                this.products = products;
                this.renderProducts(renderContainer, products);
                this.addEventListeners();
            })
    }
    getProductById(id) {
        return this.products.find(el => el.id === id);
    }
    renderProducts(container, products) {
        let productListDomString = ''
        products.forEach(product => {
            productListDomString += 
                `<article class="product-cart">
                    <img src="img/${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>$${product.price}</p>
                    <div class="button-container">
                        <button class="button button-buy" data-id="${product.id}">
                           Buy
                        </button>
                    </div>
                </article>`;
        });
        container.html(productListDomString);
    }
}