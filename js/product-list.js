class ProductList {
    constructor (productsUrl, renderContainer) {
       // this.cart = cart;
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
                    <h2>${product.title}</h2>
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
    addEventListeners() {
        
        $('.card.product button.buy').click( event => {
            const button = $(event.target);
            console.log(button);
            const id  = button.data('id'); 
            console.log(id);
            this.cart.addProduct(id);
            window.showAlert('Product added to cart');
        });
    }
}